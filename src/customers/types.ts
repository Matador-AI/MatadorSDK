export interface CustomersResource {
    createNote(text: string, customerPhone: string): Promise<any>;
}