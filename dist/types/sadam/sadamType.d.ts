export interface Sadam {
    layer: any;
    id: number;
    type: number;
    slotX: number;
    slotY: number;
    priority: number;
    pikudId: number;
    unitId: number;
    areaName: string;
    plantDate: Date;
    clearDate: Date;
    status: number;
    isIdf: boolean;
    isOperational: boolean;
    fenceStatus: number;
    facilityId?: number;
    comments?: string;
    mineTypes: number[];
    coordinates: any;
    risks: number[];
}
