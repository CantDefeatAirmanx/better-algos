interface PersonInfo {
    name: string;
    phones: number[];
}
type Notebook = PersonInfo[];

export const findRepetativePhones = (notebook: Notebook) => {
    const phonesInfo = new Map<number, string[]>();

    for (const personInfo of notebook) {
        const { name } = personInfo;

        for (const phone of personInfo.phones) {
            if (!phonesInfo.has(phone)) {
                phonesInfo.set(phone, []);
            }

            const phoneInfo = phonesInfo.get(phone)!;
            phoneInfo.push(name);
        }
    }

    return [...phonesInfo]
        .filter(([, phones]) => phones.length > 1)
        .map(([phone, names]) => `${names.join(', ')}: ${phone}`)
        .join('\n');
};

export {};
