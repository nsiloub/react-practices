export type Letter = {
    id: number,
    subject: string,
    isStarred: boolean
};

export const initialLetters: Letter[] = [
    {
        id: 0,
        subject: "Ready for adventure",
        isStarred: true
    },
    {
        id: 1,
        subject: "Time to check in",
        isStarred: false
    },
    {
        id: 2,
        subject: "Festival begins in SEVEN days!",
        isStarred: false
    }
];