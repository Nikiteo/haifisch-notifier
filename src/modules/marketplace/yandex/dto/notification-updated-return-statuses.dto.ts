import { IsEnum, IsOptional } from 'class-validator'
import { RefundStatusType, ReturnShipmentStatusType } from '../types/yandex-types'

/**
 * DTO для информации об обновлении статуса невыкупа или возврата.
 */
export class NotificationUpdatedReturnStatusesDTO {
	@IsEnum(RefundStatusType)
	@IsOptional()
	refundStatus?: RefundStatusType

	@IsEnum(ReturnShipmentStatusType)
	@IsOptional()
	shipmentStatus?: ReturnShipmentStatusType
}
