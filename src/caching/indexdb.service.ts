import Dexie from 'dexie';
import { Injectable } from '@angular/core';
import { AWSCredentails } from 'src/app/utils';
import { IndexDBAWSConfigWrapper } from './model/indexdb-aws-config-wrapper';

enum CollectionNames {
    AWS_CONFIGS = 'aws configs',
}


@Injectable()
export class IndexDBService {

    private db: Dexie | null = null;

    private static readonly VERSION_INIT = 1;
    private static readonly PRIMARY_KEY = 'pkey';

    async init() {
        if (!this.db) {
            console.log("Creating Dexie")
            this.db = new Dexie('aws_stat');
        }
        this.db.version(IndexDBService.VERSION_INIT).stores({
            [CollectionNames.AWS_CONFIGS]: `${IndexDBService.PRIMARY_KEY}`,
        });

        if (!this.db.isOpen()) {
            console.log(`Opening Telecrm Dexie DB`);
            await this.db.open();
        }
        console.log(`Finished Initializing Dexie`);
    }

    async clear(): Promise<void> {
        if (this.db) {
            await Promise.all([
                this.db.table(CollectionNames.AWS_CONFIGS).clear(),
            ]);
        }

    }


    async saveAwsCredsInfo(awsConfig: AWSCredentails) {
        await this.db?.table(CollectionNames.AWS_CONFIGS).clear();
        const msgPayload = IndexDBAWSConfigWrapper.getAWSConfigWrapper(awsConfig);
        await this.db?.table(CollectionNames.AWS_CONFIGS).put(msgPayload);
    }

    async getAwsCreds() {
        try {
            const data = await this.db?.table(CollectionNames.AWS_CONFIGS).toArray()
            if (data?.length) {
                const payload = IndexDBAWSConfigWrapper.fromAwsConfigWrapper(data[0]);
                return payload.awsConfig;
            } else {
                await this.db?.table(CollectionNames.AWS_CONFIGS).clear();
                return null;
            }
        } catch (error) {
            console.log("indexdb getAwsCreds error" , error)
            await this.db?.table(CollectionNames.AWS_CONFIGS).clear();
            return null;
        }
    }

}
