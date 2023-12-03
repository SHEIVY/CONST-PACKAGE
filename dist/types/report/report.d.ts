import { PersonalInfo } from "../personalInfo/personalInfo";
export interface Report {
    id: number;
    creationDate: Date;
    lastUpdatedAt: Date;
    sadamNumber: number;
    date: Date;
    width: number;
    length: number;
    comments?: string;
    statusId: number;
    creatorId: number;
    approverId: number;
    filesIds?: string[];
    creatorObject: PersonalInfo;
    approverObject: PersonalInfo;
}
export interface ReviewReport extends Report {
    from: string;
    to: string;
    slotX: number;
    slotY: number;
    signStatus?: string;
    fenceStatus?: string;
    unitId: number;
}
export interface EventReport extends Report {
    eventName: string;
    type: number;
    reporter: string;
    description: string;
    location: string;
    eventOutcome: string;
    unitId: number;
    freeType: string;
}
export interface GibovReport extends Report {
    slotX: number;
    slotY: number;
    type: number;
    exceptionalFinidings?: string;
    fenceStatus?: string;
    isSearch: boolean;
    searchComment?: string;
    isGibovOutside: boolean;
    gibovOutsideComment?: string;
}
export interface SadamClearReport extends Report {
    from: string;
    to: number;
    da: number;
    slotX: number;
    slotY: number;
}
export type allReports = ReviewReport | SadamClearReport | GibovReport | EventReport;
export interface AllReportsWithType {
    type: string;
    report: allReports;
}
