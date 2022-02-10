/*
|------------------------------------------------------------------------------------------------------------------
| Author:	   TS MOGANO
| Create date:  2022-02-09
| Description:  IDAS - Genio - API - routes utilities class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|------------------------------------------------------------------------------------------------------------------
 */
const express = require(`express`);
const config = require(`../config/config`);

/*
|------------------------------------------------------------------------------------------------------------------
| Function(s)
|------------------------------------------------------------------------------------------------------------------
 */
function eRoutes() {
    const router = express.Router();
    var root = require(`./root`)(router, config);
    var authentication = require(`./authentication/api`)(router, config);
    var routeUser = require(`./user/api`)(router, config);
    var routeConfigurationSetting = require(`./configuration-setting/api`)(router, config);
    var routeLookupCategory = require(`./lookup-category/api`)(router, config);
    var routeLookupValue = require(`./lookup-value/api`)(router, config);
    var routeEntity = require(`./entity/api`)(router, config);
    var routeEntityRelationship = require(`./entity-relationship/api`)(router, config);
    var routeEntityUserGroupCapacity = require(`./entity-user-group-capacity/api`)(router, config);
    var routeEntityChangeHistory = require(`./entity-change-history/api`)(router, config);
    var routeEmployee = require(`./employee/api`)(router, config);
    var routeClient = require(`./client/api`)(router, config);
    var routeSupplier = require(`./supplier/api`)(router, config);
    var routeContactDetail = require(`./contact-detail/api`)(router, config);
    var routeProject = require(`./project/api`)(router, config);
    var routeProjectAssignment = require(`./project-assignment/api`)(router, config);
    var routeProjectComment = require(`./project-comment/api`)(router, config);
    var routeProjectWorkLog = require(`./project-work-log/api`)(router, config);
    var routeProjectReview = require(`./project-review/api`)(router, config);
    var routeProjectStatus = require(`./project-status/api`)(router, config);
    var routeTask = require(`./task/api`)(router, config);
    var routeTaskAssignment = require(`./task-assignment/api`)(router, config);
    var routeTaskComment = require(`./task-comment/api`)(router, config);
    var routeTaskWorkLog = require(`./task-work-log/api`)(router, config);
    var routeTaskReview = require(`./task-review/api`)(router, config);
    var routeTaskStatus = require(`./task-status/api`)(router, config);
    var routeUserGroup = require(`./user-group/api`)(router, config);
    var routeUserGroupCapacity = require(`./user-group-capacity/api`)(router, config);
    var routeMenuItem = require(`./menu-item/api`)(router, config);
    var routeCalendarEvent = require(`./calendar-event/api`)(router, config);
    var routeCalendarEventAttendee = require(`./calendar-event-attendee/api`)(router, config);
    var routeUserLocks = require(`./user-locks/api`)(router, config);
    var routeUserTransaction = require(`./user-transaction/api`)(router, config);
    var routeGroupMenuItem = require(`./group-menu-item/api`)(router, config);
    var routeUserTypeMenuItem = require(`./user-type-menu-item/api`)(router, config);
    var routeNotificationMessage = require(`./notification-message/api`)(router, config);
    var routeInboxMessage = require(`./inbox-message/api`)(router, config);
    var routeFileAttachment = require(`./file-attachment/api`)(router, config);
    var routevwRandomEmployeeNumber = require(`./vw-random-employee-number/api`)(router, config);
    return router;
}

/*
|------------------------------------------------------------------------------------------------------------------
| module.exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = eRoutes;
