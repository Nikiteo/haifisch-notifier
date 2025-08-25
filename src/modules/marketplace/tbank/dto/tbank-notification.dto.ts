import { Type } from 'class-transformer'
import { IsEnum, IsString, ValidateNested } from 'class-validator'
import { AccountOperationStatus, OperationType } from '../types/tbank-types.js'
import { CounterPartyDTO } from './counter-party.dto.js'
import { MerchDTO } from './metch.dto.js'
import { PayerDTO } from './payer.dto.js'
import { ReceiverDTO } from './receiver.dto.js'

export class TbankNotificationDTO {
	@IsString()
	operationId!: string

	@IsEnum(OperationType)
	typeOfOperation!: OperationType

	@IsString()
	accountNumber!: string

	@IsString()
	documentNumber!: string

	@IsString()
	operationAmount!: string

	@IsString()
	operationCurrencyDigitalCode!: string

	@IsString()
	accountAmount!: string

	@IsString()
	accountCurrencyDigitalCode!: string

	@IsString()
	rubleAmount!: string

	@ValidateNested()
	@Type(() => CounterPartyDTO)
	counterParty!: CounterPartyDTO

	@IsString()
	description!: string

	@IsString()
	authorizationDate!: string

	@IsString()
	trxnPostDate!: string

	@IsString()
	payVo!: string

	@IsString()
	priority!: string

	@IsString()
	cardNumber!: string

	@IsString()
	ucid!: string

	@IsString()
	mcc!: string

	@ValidateNested()
	@Type(() => MerchDTO)
	merch!: MerchDTO

	@IsString()
	status!: string

	@IsEnum(AccountOperationStatus)
	operationStatus!: AccountOperationStatus

	@IsString()
	bic!: string

	@IsString()
	rrn!: string

	@IsString()
	category!: string

	@IsString()
	payPurpose!: string

	@ValidateNested()
	@Type(() => ReceiverDTO)
	receiver!: ReceiverDTO

	@ValidateNested()
	@Type(() => PayerDTO)
	payer!: PayerDTO

	@IsString()
	chargeDate!: string

	@IsString()
	drawDate!: string

	@IsString()
	kbk!: string

	@IsString()
	oktmo!: string

	@IsString()
	taxEvidence!: string

	@IsString()
	taxPeriod!: string

	@IsString()
	taxDocNumber!: string

	@IsString()
	taxDocDate!: string

	@IsString()
	nalType!: string

	@IsString()
	docDate!: string

	@IsString()
	VO!: string
}
