import { USBDirection, USBEndpointType } from "./enums";
/**
 * USB Endpoint
 */
export declare class USBEndpoint {
    /**
     * The number of this endpoint
     */
    readonly endpointNumber: number;
    /**
     * The direction of this endpoint
     */
    readonly direction: USBDirection;
    /**
     * The type of this endpoint
     */
    readonly type: USBEndpointType;
    /**
     * The packet size of this endpoint
     */
    readonly packetSize: number;
    /**
     * @hidden
     */
    constructor(init?: Partial<USBEndpoint>);
}
