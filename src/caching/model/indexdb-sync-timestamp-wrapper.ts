

export class IndexDBSyncTimestampWrapper {


    // public static getPrimaryKey(inactivityWindow: InactivityWindow) {
    //     return inactivityWindow.leftTimestamp;
    // }

    public static getSyncTimestampWrapper(apiKey: string, timestamp: number): { pkey: string, payload: { apiKey: string, timestamp: number } } {
        return { pkey: apiKey, payload: { apiKey, timestamp } };
    }

    public static fromInactivityWindowWrapper(jsonObject: { pkey: string, payload: { apiKey: string, timestamp: number } }): { apiKey: string, timestamp: number } {
        return jsonObject.payload;
    }
    
}