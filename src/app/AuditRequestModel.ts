import { AuditDetails } from "./AuditDetails";

export class AuditRequestModel{

    constructor(private requestid:number,private auditdetail:AuditDetails,private projectname:string,
        private managername:string,private ownername:string){
            this.requestid = requestid;
            this.auditdetail = auditdetail;
            this.projectname=projectname;
            this.managername=managername;
            this.ownername=ownername;
        }
    
    
}