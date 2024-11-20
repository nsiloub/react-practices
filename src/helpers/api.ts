export type Person = "Alice" | "Bob" | "Taylor";

export default function fetchBio(person: Person): Promise<string> {
    const delay = person === "Bob" ? 2000 : 200;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`This is ${person}'s bio`);
        }, delay);
    });
}