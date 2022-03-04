/*
|------------------------------------------------------------------------------------------------------------------
| Author:	   TS MOGANO
| Create date:  2022-03-04
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
    const routeRoot = require(`./root`)(router, config);
    const routeAuthentication = require(`./authentication/api`)(router, config);
    const routeImages = require(`./images/api`)(router, config);
    const routeUser = require(`./user/api`)(router, config);
    const routeConfigurationSetting = require(`./configuration-setting/api`)(router, config);
    const routeLookupCategory = require(`./lookup-category/api`)(router, config);
    const routeLookupValue = require(`./lookup-value/api`)(router, config);
    const routeEntity = require(`./entity/api`)(router, config);
    const routeEntityRelationship = require(`./entity-relationship/api`)(router, config);
    const routeEntityUserGroupCapacity = require(`./entity-user-group-capacity/api`)(router, config);
    const routeEntityChangeHistory = require(`./entity-change-history/api`)(router, config);
    const routeEmployee = require(`./employee/api`)(router, config);
    const routeClient = require(`./client/api`)(router, config);
    const routeSupplier = require(`./supplier/api`)(router, config);
    const routeContactDetail = require(`./contact-detail/api`)(router, config);
    const routeProject = require(`./project/api`)(router, config);
    const routeProjectAssignment = require(`./project-assignment/api`)(router, config);
    const routeProjectComment = require(`./project-comment/api`)(router, config);
    const routeProjectWorklog = require(`./project-worklog/api`)(router, config);
    const routeProjectReview = require(`./project-review/api`)(router, config);
    const routeProjectStatus = require(`./project-status/api`)(router, config);
    const routeTask = require(`./task/api`)(router, config);
    const routeTaskAssignment = require(`./task-assignment/api`)(router, config);
    const routeTaskComment = require(`./task-comment/api`)(router, config);
    const routeTaskWorklog = require(`./task-worklog/api`)(router, config);
    const routeTaskReview = require(`./task-review/api`)(router, config);
    const routeTaskStatus = require(`./task-status/api`)(router, config);
    const routeUserGroup = require(`./user-group/api`)(router, config);
    const routeUserGroupCapacity = require(`./user-group-capacity/api`)(router, config);
    const routeMenuItem = require(`./menu-item/api`)(router, config);
    const routeCalendarEvent = require(`./calendar-event/api`)(router, config);
    const routeCalendarEventAttendee = require(`./calendar-event-attendee/api`)(router, config);
    const routeUserLocks = require(`./user-locks/api`)(router, config);
    const routeUserTransaction = require(`./user-transaction/api`)(router, config);
    const routeGroupMenuItem = require(`./group-menu-item/api`)(router, config);
    const routeUserTypeMenuItem = require(`./user-type-menu-item/api`)(router, config);
    const routeNotificationMessage = require(`./notification-message/api`)(router, config);
    const routeInboxMessage = require(`./inbox-message/api`)(router, config);
    const routeFileAttachment = require(`./file-attachment/api`)(router, config);
    const routevwRandomEmployeeNumber = require(`./vw-random-employee-number/api`)(router, config);
    return router;
}

/*
|------------------------------------------------------------------------------------------------------------------
| module.exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = eRoutes;
