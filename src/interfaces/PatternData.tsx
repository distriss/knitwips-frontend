export default interface PatternData {
    _id: string;
    title: string;
    description: string;
    needleSize: string;
    yarnWeight: string;
    likes: number;
    image: string;
    private: boolean;
    createdAt: string;
    updatedAt: string;
    userId: string;
}

export type newPatternData = Pick<PatternData, 'title' | 'description' | 'needleSize' | 'yarnWeight' | 'userId' >;

export interface PatternDataProps {
    pattern: PatternData;  
}