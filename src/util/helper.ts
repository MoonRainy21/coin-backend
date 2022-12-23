export const parseKyoId = (apiKey: string) : string => {
    return apiKey.substring(0, 5);
}