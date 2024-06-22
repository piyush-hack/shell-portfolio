import { AWSCredentails } from "src/app/utils";


export class IndexDBAWSConfigWrapper {
    static getAWSConfigWrapper(awsConfig: AWSCredentails) {
        return { pkey: awsConfig.credentials.accessKeyId, payload: { awsConfig, timestamp: Date.now() } };
    }

    public static keyForTicket(groupType: string, id: string) {
        return `${groupType}_${id}`
    }

    public static fromAwsConfigWrapper(jsonObject: { pkey: string, payload: { awsConfig: object, timestamp: number } }): { awsConfig: AWSCredentails, timestamp: number } {
        console.log(jsonObject.payload.awsConfig);
        return { awsConfig: AWSCredentails.fromJSON(jsonObject.payload.awsConfig), timestamp: jsonObject.payload.timestamp };
    }

}