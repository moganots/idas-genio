import { environment } from "environments/environment";

export class SharedConfiguration {
    public static baseApi = environment.baseApi;
    public static companyName = environment.companyName;
    public static applicationName = environment.applicationName;
    public static encryptionKey = environment.encryptionKey;
    public static encryptionSaltCount = environment.encryptionSaltCount;
    public static userLocalStorageName = 'idas-genio-user';
}