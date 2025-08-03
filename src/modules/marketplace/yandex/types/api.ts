/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Доступы к методам:
 *
 * * `ALL_METHODS` — полное управление кабинетом.
 * * `ALL_METHODS_READ_ONLY` — просмотр всей информации в кабинете.
 * * `INVENTORY_AND_ORDER_PROCESSING` — обработка заказов и учет товаров.
 * * `INVENTORY_AND_ORDER_PROCESSING_READ_ONLY` — просмотр информации о заказах.
 * * `PRICING` — управление ценами.
 * * `PRICING_READ_ONLY` — просмотр цен.
 * * `OFFERS_AND_CARDS_MANAGEMENT` — управление товарами и карточками.
 * * `OFFERS_AND_CARDS_MANAGEMENT_READ_ONLY` — просмотр товаров и карточек.
 * * `PROMOTION` — продвижение товаров.
 * * `PROMOTION_READ_ONLY` — просмотр информации о продвижении товаров.
 * * `FINANCE_AND_ACCOUNTING` — просмотр финансовой информации и отчётности.
 * * `COMMUNICATION` — общение с покупателями.
 * * `SETTINGS_MANAGEMENT` — настройка магазинов.
 * * `SUPPLIES_MANAGEMENT_READ_ONLY` — получение информации по FBY-заявкам.
 */
export enum ApiKeyScopeType {
  ALL_METHODS = "ALL_METHODS",
  ALL_METHODS_READ_ONLY = "ALL_METHODS_READ_ONLY",
  INVENTORY_AND_ORDER_PROCESSING = "INVENTORY_AND_ORDER_PROCESSING",
  INVENTORY_AND_ORDER_PROCESSING_READ_ONLY = "INVENTORY_AND_ORDER_PROCESSING_READ_ONLY",
  PRICING = "PRICING",
  PRICING_READ_ONLY = "PRICING_READ_ONLY",
  OFFERS_AND_CARDS_MANAGEMENT = "OFFERS_AND_CARDS_MANAGEMENT",
  OFFERS_AND_CARDS_MANAGEMENT_READ_ONLY = "OFFERS_AND_CARDS_MANAGEMENT_READ_ONLY",
  PROMOTION = "PROMOTION",
  PROMOTION_READ_ONLY = "PROMOTION_READ_ONLY",
  FINANCE_AND_ACCOUNTING = "FINANCE_AND_ACCOUNTING",
  COMMUNICATION = "COMMUNICATION",
  SETTINGS_MANAGEMENT = "SETTINGS_MANAGEMENT",
  SUPPLIES_MANAGEMENT_READ_ONLY = "SUPPLIES_MANAGEMENT_READ_ONLY",
}

/**
 * Тип документа:
 *
 * * **Документы, которые загружает магазин**
 *   * `SUPPLY` — список товаров.
 *   * `ADDITIONAL_SUPPLY` — список товаров в дополнительной поставке.
 *   * `VIRTUAL_DISTRIBUTION_CENTER_SUPPLY` — список товаров в [мультипоставке](:no-translate[*multisupply]).
 *   * `TRANSFER` — список товаров для утилизации.
 *   * `WITHDRAW` — список товаров для вывоза.
 *
 * * **Поставка товаров**
 *   * `VALIDATION_ERRORS` — ошибки по товарам в поставке.
 *   * `CARGO_UNITS` — ярлыки для грузомест.
 *
 * * **Дополнительная поставка и непринятые товары**
 *   * `ADDITIONAL_SUPPLY_ACCEPTABLE_GOODS` — товары, которые подходят для дополнительной поставки.
 *   * `ADDITIONAL_SUPPLY_UNACCEPTABLE_GOODS` — вывоз непринятых товаров.
 *
 * * **Маркировка товаров**
 *   * `INBOUND_UTD` — входящий УПД.
 *   * `OUTBOUND_UTD` — исходящий УПД.
 *   * `IDENTIFIERS` — коды маркировки товаров.
 *   * `CIS_FACT` — принятые товары с кодами маркировки.
 *   * `ITEMS_WITH_CISES` — товары, для которых нужна маркировка.
 *   * `REPORT_OF_WITHDRAW_WITH_CISES` — маркированные товары для вывоза со склада.
 *   * `SECONDARY_ACCEPTANCE_CISES` — маркированные товары, которые приняты после вторичной приемки.
 *   * `RNPT_FACT` — принятые товары с регистрационным номером партии товара (РНПТ).
 *
 * * **Акты**
 *   * `ACT_OF_WITHDRAW` — акт возврата.
 *   * `ANOMALY_CONTAINERS_WITHDRAW_ACT` — акт изъятия непринятого товара.
 *   * `ACT_OF_WITHDRAW_FROM_STORAGE` — акт списания с ответственного хранения.
 *   * `ACT_OF_RECEPTION_TRANSFER` — акт приема-передачи.
 *   * `ACT_OF_DISCREPANCY` — акт о расхождениях.
 *   * `SECONDARY_RECEPTION_ACT` — акт вторичной приемки.
 */
export enum SupplyRequestDocumentType {
  SUPPLY = "SUPPLY",
  ADDITIONAL_SUPPLY = "ADDITIONAL_SUPPLY",
  VIRTUAL_DISTRIBUTION_CENTER_SUPPLY = "VIRTUAL_DISTRIBUTION_CENTER_SUPPLY",
  TRANSFER = "TRANSFER",
  INBOUND_UTD = "INBOUND_UTD",
  OUTBOUND_UTD = "OUTBOUND_UTD",
  ADDITIONAL_SUPPLY_ACCEPTABLE_GOODS = "ADDITIONAL_SUPPLY_ACCEPTABLE_GOODS",
  ADDITIONAL_SUPPLY_UNACCEPTABLE_GOODS = "ADDITIONAL_SUPPLY_UNACCEPTABLE_GOODS",
  VALIDATION_ERRORS = "VALIDATION_ERRORS",
  WITHDRAW = "WITHDRAW",
  ACT_OF_WITHDRAW = "ACT_OF_WITHDRAW",
  ANOMALY_CONTAINERS_WITHDRAW_ACT = "ANOMALY_CONTAINERS_WITHDRAW_ACT",
  ACT_OF_WITHDRAW_FROM_STORAGE = "ACT_OF_WITHDRAW_FROM_STORAGE",
  ACT_OF_RECEPTION_TRANSFER = "ACT_OF_RECEPTION_TRANSFER",
  ACT_OF_DISCREPANCY = "ACT_OF_DISCREPANCY",
  SECONDARY_RECEPTION_ACT = "SECONDARY_RECEPTION_ACT",
  CARGO_UNITS = "CARGO_UNITS",
  IDENTIFIERS = "IDENTIFIERS",
  CIS_FACT = "CIS_FACT",
  ITEMS_WITH_CISES = "ITEMS_WITH_CISES",
  REPORT_OF_WITHDRAW_WITH_CISES = "REPORT_OF_WITHDRAW_WITH_CISES",
  SECONDARY_ACCEPTANCE_CISES = "SECONDARY_ACCEPTANCE_CISES",
  RNPT_FACT = "RNPT_FACT",
}

/**
 * Тип склада или ПВЗ:
 *
 * * `FULFILLMENT` — склад хранения.
 * * `XDOC` — транзитный склад.
 * * `PICKUP_POINT` — ПВЗ.
 */
export enum SupplyRequestLocationType {
  FULFILLMENT = "FULFILLMENT",
  XDOC = "XDOC",
  PICKUP_POINT = "PICKUP_POINT",
}

/**
 * Тип связи между двумя заявками:
 *
 * * `VIRTUAL_DISTRIBUTION` — [мультипоставка](:no-translate[*multisupply]).
 *
 * * `WITHDRAW` — вывоз непринятых товаров.
 *
 *     Подтипы заявки: `DEFAULT`, `XDOC`, `VIRTUAL_DISTRIBUTION_CENTER_CHILD` и `ANOMALY_WITHDRAW`.
 *
 * * `UTILIZATION` — утилизация непринятых товаров.
 *
 *     Подтипы заявки: `DEFAULT`, `XDOC`, `VIRTUAL_DISTRIBUTION_CENTER_CHILD` и `FORCE_PLAN_ANOMALY_PER_SUPPLY`.
 *
 * * `ADDITIONAL_SUPPLY` — дополнительная поставка.
 *
 *     Подтипы заявки: `DEFAULT`, `XDOC`, `VIRTUAL_DISTRIBUTION_CENTER_CHILD` и `ADDITIONAL_SUPPLY`.
 */
export enum SupplyRequestReferenceType {
  VIRTUAL_DISTRIBUTION = "VIRTUAL_DISTRIBUTION",
  WITHDRAW = "WITHDRAW",
  UTILIZATION = "UTILIZATION",
  ADDITIONAL_SUPPLY = "ADDITIONAL_SUPPLY",
}

/**
 * По какому параметру сортировать заявки:
 *
 * * `ID` — идентификатор заявки.
 * * `REQUESTED_DATE` — дата поставки на склад хранения.
 *
 *     Если товары проходили через транзитный склад, сортирует по датам поставки на оба склада.
 * * `UPDATED_AT` — время обновления заявки.
 * * `STATUS` — статус заявки.
 */
export enum SupplyRequestSortAttributeType {
  ID = "ID",
  REQUESTED_DATE = "REQUESTED_DATE",
  UPDATED_AT = "UPDATED_AT",
  STATUS = "STATUS",
}

/**
 * Статус заявки на поставку:
 *
 * * `CREATED` — создан черновик заявки.
 * * `FINISHED` — заявка завершена, товары:
 *   * приняты на складе;
 *   * переданы на другой склад при перемещении;
 *   * переданы продавцу при вывозе;
 *   * утилизированы.
 * * `CANCELLED` — заявка отменена.
 * * `INVALID` — ошибка обработки.
 * * `VALIDATED` — заявка в обработке.
 * * `PUBLISHED` — создана заявка.
 * * `ARRIVED_TO_SERVICE` — поставка прибыла на склад хранения.
 * * `ARRIVED_TO_XDOC_SERVICE` — поставка прибыла на транзитный склад.
 * * `SHIPPED_TO_SERVICE` — поставка отправлена с транзитного склада на склад хранения.
 * * `CANCELLATION_REQUESTED` — запрошена отмена заявки.
 * * `CANCELLATION_REJECTED` — заявка не будет отменена.
 * * `REGISTERED_IN_ELECTRONIC_QUEUE` — поставка зарегистрирована в электронной очереди.
 * * `READY_FOR_UTILIZATION` — товары готовы к утилизации.
 * * `TRANSIT_MOVING` — перемещение товаров на склад вывоза.
 * * `WAREHOUSE_HANDLING` — вторичная приемка товаров или их сборка для вывоза или утилизации.
 * * `ACCEPTED_BY_WAREHOUSE_SYSTEM` — информация о заявке направлена на склад.
 * * `READY_TO_WITHDRAW` — товары готовы к выдаче.
 */
export enum SupplyRequestStatusType {
  CREATED = "CREATED",
  FINISHED = "FINISHED",
  CANCELLED = "CANCELLED",
  INVALID = "INVALID",
  VALIDATED = "VALIDATED",
  PUBLISHED = "PUBLISHED",
  ARRIVED_TO_SERVICE = "ARRIVED_TO_SERVICE",
  ARRIVED_TO_XDOC_SERVICE = "ARRIVED_TO_XDOC_SERVICE",
  SHIPPED_TO_SERVICE = "SHIPPED_TO_SERVICE",
  CANCELLATION_REQUESTED = "CANCELLATION_REQUESTED",
  CANCELLATION_REJECTED = "CANCELLATION_REJECTED",
  REGISTERED_IN_ELECTRONIC_QUEUE = "REGISTERED_IN_ELECTRONIC_QUEUE",
  READY_FOR_UTILIZATION = "READY_FOR_UTILIZATION",
  TRANSIT_MOVING = "TRANSIT_MOVING",
  WAREHOUSE_HANDLING = "WAREHOUSE_HANDLING",
  ACCEPTED_BY_WAREHOUSE_SYSTEM = "ACCEPTED_BY_WAREHOUSE_SYSTEM",
  READY_TO_WITHDRAW = "READY_TO_WITHDRAW",
}

/**
 * Подтип заявки:
 *
 * * `DEFAULT` — поставка товаров на склад хранения или вывоз с него.
 * * `XDOC` — поставка товаров через транзитный склад или вывоз с него.
 * * `INVENTORYING_SUPPLY` — инвентаризация на складе по запросу магазина.
 * * `INVENTORYING_SUPPLY_WAREHOUSE_BASED_PER_SUPPLIER` — инвентаризация на складе по запросу склада.
 * * `MOVEMENT_SUPPLY` — входящее перемещение между складами.
 *
 *     При перемещении между складами создаются 2 заявки — `MOVEMENT_SUPPLY` и `MOVEMENT_WITHDRAW`.
 * * `ADDITIONAL_SUPPLY` — дополнительная поставка непринятых товаров.
 * * `VIRTUAL_DISTRIBUTION_CENTER` — родительская заявка при поставке товаров на склад хранения или [мультипоставке](:no-translate[*multisupply]).
 * * `VIRTUAL_DISTRIBUTION_CENTER_CHILD` — дочерняя заявка при поставке товаров на склад хранения или [мультипоставке](:no-translate[*multisupply]).
 *
 *     Для нее не возвращается `transitLocation`.
 * * `FORCE_PLAN` — автоматическая утилизация по запросу склада.
 * * `FORCE_PLAN_ANOMALY_PER_SUPPLY` — утилизация непринятых товаров.
 * * `PLAN_BY_SUPPLIER` — утилизация по запросу магазина.
 * * `ANOMALY_WITHDRAW` — вывоз непринятых товаров.
 * * `FIX_LOST_INVENTORYING` — товары, которые не нашли после второй инвентаризации.
 * * `OPER_LOST_INVENTORYING` — товары, которые не нашли после первой инвентаризации.
 * * `MOVEMENT_WITHDRAW` — исходящее перемещение между складами.
 *
 *     При перемещении между складами создаются 2 заявки — `MOVEMENT_SUPPLY` и `MOVEMENT_WITHDRAW`.
 * * `MISGRADING_SUPPLY` — пересортица в большую сторону.
 * * `MISGRADING_WITHDRAW` — пересортица в меньшую сторону.
 * * `MAN_UTIL` — ручная утилизация по запросу склада.
 */
export enum SupplyRequestSubType {
  DEFAULT = "DEFAULT",
  XDOC = "XDOC",
  INVENTORYING_SUPPLY = "INVENTORYING_SUPPLY",
  INVENTORYING_SUPPLY_WAREHOUSE_BASED_PER_SUPPLIER = "INVENTORYING_SUPPLY_WAREHOUSE_BASED_PER_SUPPLIER",
  MOVEMENT_SUPPLY = "MOVEMENT_SUPPLY",
  ADDITIONAL_SUPPLY = "ADDITIONAL_SUPPLY",
  VIRTUAL_DISTRIBUTION_CENTER = "VIRTUAL_DISTRIBUTION_CENTER",
  VIRTUAL_DISTRIBUTION_CENTER_CHILD = "VIRTUAL_DISTRIBUTION_CENTER_CHILD",
  FORCE_PLAN = "FORCE_PLAN",
  FORCE_PLAN_ANOMALY_PER_SUPPLY = "FORCE_PLAN_ANOMALY_PER_SUPPLY",
  PLAN_BY_SUPPLIER = "PLAN_BY_SUPPLIER",
  ANOMALY_WITHDRAW = "ANOMALY_WITHDRAW",
  FIX_LOST_INVENTORYING = "FIX_LOST_INVENTORYING",
  OPER_LOST_INVENTORYING = "OPER_LOST_INVENTORYING",
  MOVEMENT_WITHDRAW = "MOVEMENT_WITHDRAW",
  MISGRADING_SUPPLY = "MISGRADING_SUPPLY",
  MISGRADING_WITHDRAW = "MISGRADING_WITHDRAW",
  MAN_UTIL = "MAN_UTIL",
}

/**
 * Тип заявки:
 *
 * * `SUPPLY` — поставка товаров.
 * * `WITHDRAW` — вывоз товаров.
 * * `UTILIZATION` — утилизация товаров.
 */
export enum SupplyRequestType {
  SUPPLY = "SUPPLY",
  WITHDRAW = "WITHDRAW",
  UTILIZATION = "UTILIZATION",
}

/**
 * Описание ошибки:
 *
 * * `OFFER_DOES_NOT_EXIST` — в кабинете нет товара с таким :no-translate[SKU].
 */
export enum RejectedPromoOfferDeleteReasonType {
  OFFER_DOES_NOT_EXIST = "OFFER_DOES_NOT_EXIST",
}

/**
 * Предупреждение, которое появилось при добавлении товара:
 *
 * * `DEEP_DISCOUNT_OFFER` — большая разница с ценой в каталоге. Проверьте, нет ли ошибки.
 *
 * * `CATALOG_PRICE_IS_LOWER_THAN_PROMO` — цена, которая действует во всех магазинах, ниже цены по акции. У товара не будет отображаться цена по акции.
 *
 * * `SHOP_PRICES_ARE_LOWER_THAN_PROMO` — цена в отдельном магазине ниже цены по акции. У товара в акции будет отображаться цена в магазине. Для остальных магазинов будет действовать цена по акции.
 *
 * * `SHOP_OFFER_NOT_ELIGIBLE_FOR_PROMO` — товар в отдельном магазине не подходит под условия акции.
 */
export enum PromoOfferUpdateWarningCodeType {
  DEEP_DISCOUNT_OFFER = "DEEP_DISCOUNT_OFFER",
  CATALOG_PRICE_IS_LOWER_THAN_PROMO = "CATALOG_PRICE_IS_LOWER_THAN_PROMO",
  SHOP_PRICES_ARE_LOWER_THAN_PROMO = "SHOP_PRICES_ARE_LOWER_THAN_PROMO",
  SHOP_OFFER_NOT_ELIGIBLE_FOR_PROMO = "SHOP_OFFER_NOT_ELIGIBLE_FOR_PROMO",
}

/**
 * Причина отклонения изменения:
 *
 * * `OFFER_DOES_NOT_EXIST` — в кабинете нет товара с таким SKU.
 *
 * * `OFFER_DUPLICATION` — один и тот же товар передан несколько раз.
 *
 * * `OFFER_NOT_ELIGIBLE_FOR_PROMO` — товар не подходит под условия акции.
 *
 * * `OFFER_PROMOS_MAX_BYTE_SIZE_EXCEEDED` — товар не добавлен в акцию по техническим причинам.
 *
 * * `DEADLINE_FOR_FOCUS_PROMOS_EXCEEDED` — истек срок добавления товаров в акцию.
 *
 * * `EMPTY_OLD_PRICE` — не указана зачеркнутая цена.
 *
 * * `EMPTY_PROMO_PRICE` — не указана цена по акции.
 *
 * * `MAX_PROMO_PRICE_EXCEEDED` — цена по акции превышает максимально возможную цену для участия в акции.
 *
 * * `PROMO_PRICE_BIGGER_THAN_MAX` — цена по акции больше 95% от зачеркнутой цены.
 *
 * * `PROMO_PRICE_SMALLER_THAN_MIN` — цена по акции меньше 1% от зачеркнутой цены.
 */
export enum RejectedPromoOfferUpdateReasonType {
  OFFER_DOES_NOT_EXIST = "OFFER_DOES_NOT_EXIST",
  OFFER_DUPLICATION = "OFFER_DUPLICATION",
  OFFER_NOT_ELIGIBLE_FOR_PROMO = "OFFER_NOT_ELIGIBLE_FOR_PROMO",
  OFFER_PROMOS_MAX_BYTE_SIZE_EXCEEDED = "OFFER_PROMOS_MAX_BYTE_SIZE_EXCEEDED",
  DEADLINE_FOR_FOCUS_PROMOS_EXCEEDED = "DEADLINE_FOR_FOCUS_PROMOS_EXCEEDED",
  EMPTY_OLD_PRICE = "EMPTY_OLD_PRICE",
  EMPTY_PROMO_PRICE = "EMPTY_PROMO_PRICE",
  MAX_PROMO_PRICE_EXCEEDED = "MAX_PROMO_PRICE_EXCEEDED",
  PROMO_PRICE_BIGGER_THAN_MAX = "PROMO_PRICE_BIGGER_THAN_MAX",
  PROMO_PRICE_SMALLER_THAN_MIN = "PROMO_PRICE_SMALLER_THAN_MIN",
}

/**
 * Статус товара в акции:
 *
 * * `AUTO` — добавлен автоматически во всех магазинах кабинета, в которых товар доступен для покупки.
 *
 * * `PARTIALLY_AUTO` — добавлен автоматически у части магазинов.
 *
 * * `MANUAL` — добавлен вручную.
 *
 * * `NOT_PARTICIPATING` — не участвует в акции.
 *
 * * `RENEWED` — успешно перенесен из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».
 *
 * * `RENEW_FAILED` — не получилось перенести из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».
 *
 * * `MINIMUM_FOR_PROMOS` — участвует в акции с ценой `maxPromoPrice` ([установлен минимум по цене для акций](*minimumForBestseller), который соответствует порогу `maxPromoPrice`). Только для акций «Бестселлеры Маркета».
 *
 * Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index).
 */
export enum PromoOfferParticipationStatusType {
  AUTO = "AUTO",
  PARTIALLY_AUTO = "PARTIALLY_AUTO",
  MANUAL = "MANUAL",
  NOT_PARTICIPATING = "NOT_PARTICIPATING",
  RENEWED = "RENEWED",
  RENEW_FAILED = "RENEW_FAILED",
  MINIMUM_FOR_PROMOS = "MINIMUM_FOR_PROMOS",
}

/**
 * Фильтр для товаров, которые могут участвовать в акции:
 *
 * * `MANUALLY_ADDED` — товары, которые добавлены вручную.
 *
 * * `RENEWED` — товары, которые добавлены автоматически из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».
 *
 * * `RENEW_FAILED` — товары, которые не получилось перенести из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».
 *
 * * `NOT_MANUALLY_ADDED` — товары, которые не участвуют в акции и те, которые добавлены автоматически.
 *
 * * `MINIMUM_FOR_PROMOS` — товары с [установленным минимумом по цене для акций](:no-translate[*minimumForBestseller]), который соответствует порогу `maxPromoPrice`. Такие товары участвуют в акции с ценой `maxPromoPrice`. Только для акций «Бестселлеры Маркета».
 *
 * Если не передать параметр `statuses`, вернутся все товары.
 *
 * Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index).
 */
export enum PromoOfferParticipationStatusMultiFilterType {
  MANUALLY_ADDED = "MANUALLY_ADDED",
  RENEWED = "RENEWED",
  RENEW_FAILED = "RENEW_FAILED",
  NOT_MANUALLY_ADDED = "NOT_MANUALLY_ADDED",
  MINIMUM_FOR_PROMOS = "MINIMUM_FOR_PROMOS",
}

/**
 * Фильтр для товаров, которые добавлены в акцию вручную:
 *
 * * `MANUALLY_ADDED` — товары, которые добавлены вручную.
 *
 * * `NOT_MANUALLY_ADDED`— товары, которые не участвуют в акции и те, которые добавлены автоматически.
 *
 * Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index).
 */
export enum PromoOfferParticipationStatusFilterType {
  MANUALLY_ADDED = "MANUALLY_ADDED",
  NOT_MANUALLY_ADDED = "NOT_MANUALLY_ADDED",
}

/**
 * Каналы продвижения товаров:
 *
 * * `PUSH` — пуш-уведомление из приложения Яндекс Маркет.
 *
 * * `STRETCH_MAIN` — верхний баннер-растяжка на главной странице Яндекс Маркета.
 *
 * * `MAIN_PAGE_CAROUSEL` — карусель акций на главной странице Яндекс Маркета.
 *
 * * `PRODUCT_RETAIL_PAGE` — товар на странице ритейл-повода.
 *
 * * `MAIN_PAGE_CAROUSEL_WEB` — карусель акций на главной странице веб версии Яндекс Маркета.
 *
 * * `PRODUCT_SEPARATE_LANDING` — товар на лендинге акции.
 *
 * * `SUPER_SHELF_CATEGORY` — полка в категориях.
 *
 * * `CAROUSEL_RETAIL_PAGE` — карусель на лендинге ритейл-повода.
 *
 * * `POPUP_APPLICATION` — всплывающее окно в приложении Яндекс Маркет.
 *
 * * `POST_TELEGRAM` — пост в Телеграм-канале Яндекс Маркета.
 *
 * * `CPA` — реклама в партнерской сети Яндекс Маркета.
 *
 * * `WEB_PERFORMANCE_DIRECT` — реклама в Яндекс Директе.
 *
 * * `APP_PERFORMANCE` — реклама в :no-translate[AppStore] и :no-translate[Google Play].
 *
 * * `BANNER_PICKUP_POINT` — баннер в ПВЗ Маркета.
 *
 * * `BLOGGER_PERFORMANCE` — рекламная интеграция у блогеров.
 *
 * * `DIGITAL_CHANNEL_BANNER` — баннер в digital-каналах и социальных сетях :no-translate[VK], :no-translate[Одноклассники].
 *
 * * `YANDEX_ECOSYSTEM_CHANNELS` — реклама в других сервисах Яндекса: :no-translate[GO], :no-translate[Delivery], :no-translate[Еда].
 *
 * * `PARTNERS_MAIN_BANNER` — баннер на главной странице :no-translate[mail.ru], :no-translate[auto.ru], :no-translate[ya.ru].
 *
 * * `OTHER` — прочее.
 */
export enum ChannelType {
  PUSH = "PUSH",
  STRETCH_MAIN = "STRETCH_MAIN",
  MAIN_PAGE_CAROUSEL = "MAIN_PAGE_CAROUSEL",
  PRODUCT_RETAIL_PAGE = "PRODUCT_RETAIL_PAGE",
  MAIN_PAGE_CAROUSEL_WEB = "MAIN_PAGE_CAROUSEL_WEB",
  PRODUCT_SEPARATE_LANDING = "PRODUCT_SEPARATE_LANDING",
  SUPER_SHELF_CATEGORY = "SUPER_SHELF_CATEGORY",
  CAROUSEL_RETAIL_PAGE = "CAROUSEL_RETAIL_PAGE",
  POPUP_APPLICATION = "POPUP_APPLICATION",
  POST_TELEGRAM = "POST_TELEGRAM",
  CPA = "CPA",
  WEB_PERFORMANCE_DIRECT = "WEB_PERFORMANCE_DIRECT",
  APP_PERFORMANCE = "APP_PERFORMANCE",
  BANNER_PICKUP_POINT = "BANNER_PICKUP_POINT",
  BLOGGER_PERFORMANCE = "BLOGGER_PERFORMANCE",
  DIGITAL_CHANNEL_BANNER = "DIGITAL_CHANNEL_BANNER",
  YANDEX_ECOSYSTEM_CHANNELS = "YANDEX_ECOSYSTEM_CHANNELS",
  PARTNERS_MAIN_BANNER = "PARTNERS_MAIN_BANNER",
  OTHER = "OTHER",
}

/**
 * Тип акции:
 *
 * * `DIRECT_DISCOUNT` — прямая скидка.
 *
 * * `BLUE_FLASH` — флеш-акция.
 *
 * * `MARKET_PROMOCODE` — скидка по промокоду.
 */
export enum MechanicsType {
  DIRECT_DISCOUNT = "DIRECT_DISCOUNT",
  BLUE_FLASH = "BLUE_FLASH",
  MARKET_PROMOCODE = "MARKET_PROMOCODE",
}

/**
 * Какие акции вернутся:
 *
 * * `PARTICIPATING_NOW` — текущие и будущие акции, в которых продавец участвует или может принять участие.
 *
 * * `PARTICIPATED` — завершенные акции, в которых продавец участвовал за последний год. Если за год их было меньше 15, в ответе придут 15 последних акций за все время.
 */
export enum PromoParticipationType {
  PARTICIPATING_NOW = "PARTICIPATING_NOW",
  PARTICIPATED = "PARTICIPATED",
}

/**
 * Составляющие индекса качества.
 *
 * **Для модели :no-translate[DBS]:**
 * * `DBS_CANCELLATION_RATE` — доля отмененных товаров.
 * * `DBS_LATE_DELIVERY_RATE` — доля заказов, доставленных после плановой даты.
 *
 * **Для моделей :no-translate[FBS] и Экспресс:**
 * * `FBS_CANCELLATION_RATE` — доля отмененных товаров.
 * * `FBS_LATE_SHIP_RATE` — доля не вовремя отгруженных заказов.
 */
export enum AffectedOrderQualityRatingComponentType {
  DBS_CANCELLATION_RATE = "DBS_CANCELLATION_RATE",
  DBS_LATE_DELIVERY_RATE = "DBS_LATE_DELIVERY_RATE",
  FBS_CANCELLATION_RATE = "FBS_CANCELLATION_RATE",
  FBS_LATE_SHIP_RATE = "FBS_LATE_SHIP_RATE",
}

/**
 * Составляющие индекса качества.
 *
 * **Для модели :no-translate[DBS]:**
 * * `DBS_CANCELLATION_RATE` — доля отмененных товаров.
 * * `DBS_LATE_DELIVERY_RATE` — доля заказов, доставленных после плановой даты.
 *
 * **Для моделей :no-translate[FBS] и Экспресс:**
 * * `FBS_CANCELLATION_RATE` — доля отмененных товаров.
 * * `FBS_LATE_SHIP_RATE` — доля не вовремя отгруженных заказов.
 *
 * **Для модели :no-translate[FBY]:**
 * * `FBY_LATE_DELIVERY_RATE` — доля товаров, которые приехали на склад с опозданием.
 * * `FBY_CANCELLATION_RATE` — доля отмененных или недоставленных товаров.
 * * `FBY_DELIVERY_DIFF_RATE` — доля товаров, которые не прибыли вместе с поставкой или которые не приняли.
 * * `FBY_LATE_EDITING_RATE` — доля товаров, которые поздно убрали из заявки.
 */
export enum QualityRatingComponentType {
  DBS_CANCELLATION_RATE = "DBS_CANCELLATION_RATE",
  DBS_LATE_DELIVERY_RATE = "DBS_LATE_DELIVERY_RATE",
  FBS_CANCELLATION_RATE = "FBS_CANCELLATION_RATE",
  FBS_LATE_SHIP_RATE = "FBS_LATE_SHIP_RATE",
  FBY_LATE_DELIVERY_RATE = "FBY_LATE_DELIVERY_RATE",
  FBY_CANCELLATION_RATE = "FBY_CANCELLATION_RATE",
  FBY_DELIVERY_DIFF_RATE = "FBY_DELIVERY_DIFF_RATE",
  FBY_LATE_EDITING_RATE = "FBY_LATE_EDITING_RATE",
}

/**
 * Типы ошибок:
 *
 * * `UNKNOWN_CATEGORY` — указана неизвестная категория.
 * * `CATEGORY_IS_NOT_LEAF` — указана нелистовая категория. Укажите ту, которая не имеет дочерних категорий.
 */
export enum CategoryErrorType {
  UNKNOWN_CATEGORY = "UNKNOWN_CATEGORY",
  CATEGORY_IS_NOT_LEAF = "CATEGORY_IS_NOT_LEAF",
}

/**
 * Язык:
 *
 * * `RU` — русский.
 *
 * * `EN` — английский.
 */
export enum LanguageType {
  RU = "RU",
  EN = "EN",
}

/**
 * Услуга Маркета:
 *
 * * `AGENCY_COMMISSION` — прием платежа покупателя.
 *
 * * `PAYMENT_TRANSFER` — перевод платежа покупателя.
 *
 * * `FEE` — размещение товара на Маркете.
 *
 * * `DELIVERY_TO_CUSTOMER` — доставка покупателю.
 *
 * * `CROSSREGIONAL_DELIVERY` — доставка в федеральный округ, город или населенный пункт.
 *
 * * `EXPRESS_DELIVERY` — экспресс-доставка покупателю.
 *
 * * `SORTING` — обработка заказа.
 *
 * * `MIDDLE_MILE` — средняя миля.
 *
 * Подробнее об услугах Маркета читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/introduction/rates/index.html).
 */
export enum CalculatedTariffType {
  AGENCY_COMMISSION = "AGENCY_COMMISSION",
  PAYMENT_TRANSFER = "PAYMENT_TRANSFER",
  FEE = "FEE",
  DELIVERY_TO_CUSTOMER = "DELIVERY_TO_CUSTOMER",
  CROSSREGIONAL_DELIVERY = "CROSSREGIONAL_DELIVERY",
  EXPRESS_DELIVERY = "EXPRESS_DELIVERY",
  SORTING = "SORTING",
  MIDDLE_MILE = "MIDDLE_MILE",
}

/**
 * Частота выплат:
 *
 * * `DAILY` — ежедневно.
 * * `WEEKLY` — раз в неделю.
 * * `BIWEEKLY` — раз в две недели.
 * * `MONTHLY` — раз в месяц.
 *
 * Подробнее о графике выплат читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/introduction/rates/acquiring.html).
 */
export enum PaymentFrequencyType {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  BIWEEKLY = "BIWEEKLY",
  MONTHLY = "MONTHLY",
}

/**
 * Кто отправил сообщение:
 *
 * * `PARTNER` — магазин.
 * * `CUSTOMER` — покупатель.
 * * `MARKET` — Маркет.
 * * `SUPPORT` — сотрудник службы поддержки Маркета.
 */
export enum ChatMessageSenderType {
  PARTNER = "PARTNER",
  CUSTOMER = "CUSTOMER",
  MARKET = "MARKET",
  SUPPORT = "SUPPORT",
}

/**
 * Статус чата:
 *
 * * `NEW` — новый чат.
 * * `WAITING_FOR_CUSTOMER` — нужен ответ покупателя.
 * * `WAITING_FOR_PARTNER` — нужен ответ магазина.
 * * `WAITING_FOR_ARBITER` — нужен ответ арбитра.
 * * `WAITING_FOR_MARKET` — нужен ответ Маркета.
 * * `FINISHED` — чат завершен.
 */
export enum ChatStatusType {
  NEW = "NEW",
  WAITING_FOR_CUSTOMER = "WAITING_FOR_CUSTOMER",
  WAITING_FOR_PARTNER = "WAITING_FOR_PARTNER",
  WAITING_FOR_ARBITER = "WAITING_FOR_ARBITER",
  WAITING_FOR_MARKET = "WAITING_FOR_MARKET",
  FINISHED = "FINISHED",
}

/**
 * Тип чата:
 *
 * * `CHAT` — чат с покупателем.
 * * `ARBITRAGE` — спор.
 */
export enum ChatType {
  CHAT = "CHAT",
  ARBITRAGE = "ARBITRAGE",
}

/**
 * Тип чата:
 *
 * * `ORDER` — по заказам. Подробнее о чатах по заказам читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/communication/about-orders).
 * * `RETURN` — по возвратам (:no-translate[FBS] и Экспресс). Подробнее о чатах по возвратам читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/communication/about-orders).
 * * `DIRECT` — чат, который начал покупатель. Подробнее о таком типе читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/communication/with-users).
 */
export enum ChatContextType {
  ORDER = "ORDER",
  RETURN = "RETURN",
  DIRECT = "DIRECT",
}

/**
 * Типы ошибок и предупреждений:
 *
 * * `OFFER_NOT_FOUND` — такого товара нет в каталоге.
 * * `UNKNOWN_CATEGORY` — указана неизвестная категория.
 * * `INVALID_CATEGORY` — указана нелистовая категория. Укажите ту, которая не имеет дочерних категорий.
 * * `UNKNOWN_PARAMETER` — передана характеристика, которой нет среди характеристик категории.
 * * `UNEXPECTED_BOOLEAN_VALUE` — вместо boolean-значения передано что-то другое.
 * * `NUMBER_FORMAT` — передана строка, не обозначающая число, вместо числа.
 * * `INVALID_UNIT_ID` — передана единица измерения, недопустимая для характеристики.
 * * `INVALID_GROUP_ID_LENGTH` — в названии превышено допустимое значение символов — 255.
 * * `INVALID_GROUP_ID_CHARACTERS` — переданы [недопустимые символы](:no-translate[*ascii-code]).
 *
 * Проверить, какие категорийные характеристики доступны для заданной категории, и получить их настройки можно с помощью запроса [POST category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters).
 */
export enum OfferContentErrorType {
  OFFER_NOT_FOUND = "OFFER_NOT_FOUND",
  UNKNOWN_CATEGORY = "UNKNOWN_CATEGORY",
  INVALID_CATEGORY = "INVALID_CATEGORY",
  UNKNOWN_PARAMETER = "UNKNOWN_PARAMETER",
  UNEXPECTED_BOOLEAN_VALUE = "UNEXPECTED_BOOLEAN_VALUE",
  NUMBER_FORMAT = "NUMBER_FORMAT",
  INVALID_UNIT_ID = "INVALID_UNIT_ID",
  INVALID_GROUP_ID_LENGTH = "INVALID_GROUP_ID_LENGTH",
  INVALID_GROUP_ID_CHARACTERS = "INVALID_GROUP_ID_CHARACTERS",
}

/**
 * Статус вычисления рейтинга карточки товара и рекомендаций:
 *
 * * `UPDATING` — рейтинг обновляется.
 * * `ACTUAL` — рейтинг актуальный.
 */
export enum OfferCardContentStatusType {
  UPDATING = "UPDATING",
  ACTUAL = "ACTUAL",
}

/**
 * Рекомендация по дополнению или замене контента. Не возвращается для карточек, которые заполнены Маркетом или содержат бывшие в употреблении товары.
 *
 * Часть рекомендаций относятся к **основным параметрам**, которые есть у товаров любых категорий. Другие — к тем **характеристикам**, которые есть у товара потому, что он относится к определенной категории.
 *
 * **1. Рекомендации, относящиеся к основным параметрам**
 *
 * Каждая такая рекомендация относится к **единственному параметру**. Чтобы заполнить этот параметр, пользуйтесь запросом [POST businesses/{businessId}/offer-mappings/update](../../reference/business-assortment/updateOfferMappings.md).
 *
 * Рекомендации по заполнению параметров в `updateOfferMappings`:
 *
 * * `RECOGNIZED_VENDOR` — напишите название производителя так, как его пишет сам производитель (параметр `vendor`).
 * * `PICTURE_COUNT` — добавьте изображения (параметр `pictures`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/images)
 *
 *   Для рекомендации приходит процент ее выполнения.
 * * `FIRST_PICTURE_SIZE`— замените первое изображение более крупным (параметр `pictures`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/images)
 * * `TITLE_LENGTH` — измените название (параметр `name`). Составьте название по схеме: тип + бренд или производитель + модель + особенности, если есть (размер, вес, цвет). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/title)
 * * `DESCRIPTION_LENGTH` — добавьте описание рекомендуемого размера (параметр `description`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/description)
 * * `AVERAGE_PICTURE_SIZE` — замените все изображения на изображения высокого качества (параметр `pictures`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/images)
 * * `FIRST_VIDEO_LENGTH` — добавьте первое видео рекомендуемой длины (параметр `videos`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/video)
 * * `FIRST_VIDEO_SIZE` — замените первое видео на видео высокого качества (параметр `videos`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/video)
 * * `AVERAGE_VIDEO_SIZE` — замените все видео на видео высокого качества (параметр `videos`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/video)
 * * `VIDEO_COUNT` — добавьте хотя бы одно видео (параметр `videos`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/video)
 *
 *   Для рекомендации приходит процент ее выполнения.
 *
 * **2. Рекомендации, относящиеся к характеристикам по категориям**
 *
 * Каждая такая рекомендация предполагает заполнение **одной или нескольких характеристик**. Чтобы узнать, какие именно характеристики нужно заполнить, воспользуйтесь запросом [POST category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters.md). Например, если вы получили рекомендацию `MAIN`, нужно заполнить характеристики, имеющие `MAIN` в массиве `recommendationTypes`.
 *
 * Рекомендации:
 *
 * * `MAIN` — заполните ключевые характеристики товара, которые используются в поиске и фильтрах.
 *
 *   Для рекомендации приходит процент ее выполнения.
 * * `ADDITIONAL` — заполните дополнительные характеристики товара.
 *
 *   Для рекомендации приходит процент ее выполнения.
 * * `DISTINCTIVE` — заполните характеристики, которыми отличаются друг от друга варианты товара.
 *
 *   Для рекомендации приходит процент ее выполнения.
 *
 * **3. Устаревшие рекомендации**
 *
 * * `HAS_VIDEO`.
 * * `FILTERABLE`.
 * * `HAS_DESCRIPTION`.
 * * `HAS_BARCODE`.
 */
export enum OfferCardRecommendationType {
  HAS_VIDEO = "HAS_VIDEO",
  RECOGNIZED_VENDOR = "RECOGNIZED_VENDOR",
  MAIN = "MAIN",
  ADDITIONAL = "ADDITIONAL",
  DISTINCTIVE = "DISTINCTIVE",
  FILTERABLE = "FILTERABLE",
  PICTURE_COUNT = "PICTURE_COUNT",
  HAS_DESCRIPTION = "HAS_DESCRIPTION",
  HAS_BARCODE = "HAS_BARCODE",
  FIRST_PICTURE_SIZE = "FIRST_PICTURE_SIZE",
  TITLE_LENGTH = "TITLE_LENGTH",
  DESCRIPTION_LENGTH = "DESCRIPTION_LENGTH",
  AVERAGE_PICTURE_SIZE = "AVERAGE_PICTURE_SIZE",
  FIRST_VIDEO_SIZE = "FIRST_VIDEO_SIZE",
  FIRST_VIDEO_LENGTH = "FIRST_VIDEO_LENGTH",
  AVERAGE_VIDEO_SIZE = "AVERAGE_VIDEO_SIZE",
  VIDEO_COUNT = "VIDEO_COUNT",
}

/**
 * Тип данных:
 *
 * * `TEXT` — текст.
 * * `ENUM` — список возможных значений.
 * * `BOOLEAN` — `true` или `false`.
 * * `NUMERIC` — число.
 */
export enum ParameterType {
  TEXT = "TEXT",
  ENUM = "ENUM",
  BOOLEAN = "BOOLEAN",
  NUMERIC = "NUMERIC",
}

/**
 * Статус склада:
 *
 * * `DISABLED_MANUALLY` – отключен вами.
 * * `OTHER` – другой статус. Например, склад включен или отключен Маркетом.
 */
export enum WarehouseStatusType {
  DISABLED_MANUALLY = "DISABLED_MANUALLY",
  OTHER = "OTHER",
}

/**
 * Свойства складов, которые необходимо вернуть:
 *
 * * `ADDRESS` — адрес склада.
 * * `STATUS` — статус склада.
 */
export enum WarehouseComponentType {
  ADDRESS = "ADDRESS",
  STATUS = "STATUS",
}

/**
 * Типы дополнительных инструментов продвижения:
 *
 * * `BESTS` — участие в акции «Бестселлеры Маркета».
 * * `SPLIT_0_0_4` — возможность оплаты со Сплитом сроком на 4 месяца.
 * * `SPLIT_0_0_6` — возможность оплаты со Сплитом сроком на 6 месяцев.
 * * `SPLIT_0_0_12` — возможность оплаты со Сплитом сроком на 12 месяцев.
 * * `MARKET_SUBSIDY_1_4` — скидка от Маркета от 1 до 4%.
 * * `MARKET_SUBSIDY_5_9` — скидка от Маркета от 5 до 9%.
 * * `MARKET_SUBSIDY_10` — скидка от Маркета от 10%.
 */
export enum BenefitType {
  BESTS = "BESTS",
  SPLIT_0_0_4 = "SPLIT_0_0_4",
  SPLIT_0_0_6 = "SPLIT_0_0_6",
  SPLIT_0_0_12 = "SPLIT_0_0_12",
  MARKET_SUBSIDY_1_4 = "MARKET_SUBSIDY_1_4",
  MARKET_SUBSIDY_5_9 = "MARKET_SUBSIDY_5_9",
  MARKET_SUBSIDY_10 = "MARKET_SUBSIDY_10",
}

/**
 * Направление сортировки:
 *
 * - `ASC` — сортировка по возрастанию.
 * - `DESC` — сортировка по убыванию.
 */
export enum SortOrderType {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * Привлекательность цены:
 *
 * * `OPTIMAL` — привлекательная.
 * * `AVERAGE` — умеренная.
 * * `LOW` — непривлекательная.
 */
export enum PriceCompetitivenessType {
  OPTIMAL = "OPTIMAL",
  AVERAGE = "AVERAGE",
  LOW = "LOW",
}

/**
 * Статус комментария:
 *
 * * `PUBLISHED` — опубликован.
 * * `UNMODERATED` — не проверен.
 * * `BANNED` — заблокирован.
 * * `DELETED` — удален.
 */
export enum GoodsFeedbackCommentStatusType {
  PUBLISHED = "PUBLISHED",
  UNMODERATED = "UNMODERATED",
  BANNED = "BANNED",
  DELETED = "DELETED",
}

/**
 * Тип автора:
 *
 * * `USER` — пользователь.
 * * `BUSINESS` — кабинет.
 */
export enum GoodsFeedbackCommentAuthorType {
  USER = "USER",
  BUSINESS = "BUSINESS",
}

/**
 * Статус реакции на отзыв:
 *
 * * `ALL` — все отзывы.
 *
 * * `NEED_REACTION` — отзывы, на которые нужно ответить.
 */
export enum FeedbackReactionStatusType {
  ALL = "ALL",
  NEED_REACTION = "NEED_REACTION",
}

/**
 * Статус проверки лицензии:
 *
 * * `NEW` — лицензия проверяется.
 * * `SUCCESS` — лицензия прошла проверку.
 * * `FAIL` — лицензия не прошла проверку.
 * * `REVOKE` — лицензия отозвана службой качества.
 * * `DONT_WANT` — не проверяется.
 * * `FAIL_MANUAL` — лицензия не прошла проверку службы качества.
 */
export enum LicenseCheckStatusType {
  NEW = "NEW",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
  REVOKE = "REVOKE",
  DONT_WANT = "DONT_WANT",
  FAIL_MANUAL = "FAIL_MANUAL",
}

/**
 * Тип лицензии:
 *
 * * `ALCOHOL` — лицензия на розничную продажу алкогольной продукции.
 * * `UNKNOWN` — неизвестный тип лицензии.
 */
export enum LicenseType {
  ALCOHOL = "ALCOHOL",
  UNKNOWN = "UNKNOWN",
}

/**
 * Статус точки продаж.
 *
 * Возможные значения:
 *
 * * `AT_MODERATION` — проверяется.
 * * `FAILED` — не прошла проверку и отклонена модератором.
 * * `MODERATED` — проверена и одобрена.
 * * `NONMODERATED` — новая точка, нуждается в проверке.
 * * `UNKNOWN` — статус не указан. При определении статуса произошла ошибка.
 */
export enum OutletStatusType {
  AT_MODERATION = "AT_MODERATION",
  FAILED = "FAILED",
  MODERATED = "MODERATED",
  NONMODERATED = "NONMODERATED",
  UNKNOWN = "UNKNOWN",
}

/**
 * Состояние точки продаж.
 *
 * Возможные значения:
 *
 * * `HIDDEN` — точка продаж выключена.
 * * `VISIBLE` — точка продаж включена.
 * * `UNKNOWN` — неизвестное состояние точки продажи. При определении состояния произошла ошибка.
 */
export enum OutletVisibilityType {
  HIDDEN = "HIDDEN",
  VISIBLE = "VISIBLE",
  UNKNOWN = "UNKNOWN",
}

/**
 * Тип точки продаж.
 *
 * Возможные значения:
 *
 * * `DEPOT` — пункт выдачи заказов.
 * * `MIXED` — смешанный тип точки продаж (торговый зал и пункт выдачи заказов).
 * * `RETAIL` — розничная точка продаж (торговый зал).
 * * `NOT_DEFINED` — неизвестный тип точки продажи. При определении типа произошла ошибка.
 */
export enum OutletType {
  DEPOT = "DEPOT",
  MIXED = "MIXED",
  RETAIL = "RETAIL",
  NOT_DEFINED = "NOT_DEFINED",
}

/**
 * За какой период нужна детализация:
 *
 * * `WEEK` — по неделям.
 *
 * * `MONTH` — по месяцам.
 */
export enum KeyIndicatorsReportDetalizationLevelType {
  WEEK = "WEEK",
  MONTH = "MONTH",
}

/**
 * Тип договора:
 *
 * * `INCOME` — договор на размещение.
 *
 * * `OUTCOME` — договор на продвижение.
 *
 * * `MARKETING` — договор на маркетинг.
 */
export enum ClosureDocumentsContractType {
  INCOME = "INCOME",
  OUTCOME = "OUTCOME",
  MARKETING = "MARKETING",
}

/**
 * Тип сортировки ярлыков:
 *
 * * `SORT_BY_GIVEN_ORDER` — ярлыки заказов будут расположены в том же порядке, в каком были переданы идентификаторы заказов в запросе.
 * * `SORT_BY_ORDER_CREATED_AT` — ярлыки будут расположены в соответствии с датой создания заказа с группировкой по магазинам.
 *
 * Если параметр не указан, ярлыки сортируются по дате создания.
 */
export enum LabelsSortingType {
  SORT_BY_GIVEN_ORDER = "SORT_BY_GIVEN_ORDER",
  SORT_BY_ORDER_CREATED_AT = "SORT_BY_ORDER_CREATED_AT",
}

/**
 * Тип атрибуции:
 *   * `CLICKS` — по кликам.
 *   * `SHOWS` — по показам.
 * <br><br>
 *
 * О том, какие данные в отчете зависят и не зависят от типа атрибуции, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/shelf#stats).
 */
export enum StatisticsAttributionType {
  CLICKS = "CLICKS",
  SHOWS = "SHOWS",
}

/**
 * Группировка данных отчета.
 * Возможные значения:
 * * `CATEGORIES` — группировка по категориям.
 * * `OFFERS` — группировка по товарам.
 */
export enum ShowsSalesGroupingType {
  CATEGORIES = "CATEGORIES",
  OFFERS = "OFFERS",
}

/**
 * Язык отчета:
 *
 * * `RU` — русский язык.
 * * `EN` — английский язык.
 */
export enum ReportLanguageType {
  RU = "RU",
  EN = "EN",
}

/**
 * Формат отчета:
 *
 * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
 * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
 * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
 * @default "FILE"
 */
export enum ReportFormatType {
  FILE = "FILE",
  CSV = "CSV",
  JSON = "JSON",
}

/**
 * Подстатус генерации:
 * * `NO_DATA` — для такого отчета или документа нет данных.
 * * `TOO_LARGE` — отчет или документ превысил допустимый размер — укажите меньший период времени или уточните условия запроса.
 * * `RESOURCE_NOT_FOUND` — для такого отчета или документа не удалось найти часть сущностей.
 */
export enum ReportSubStatusType {
  NO_DATA = "NO_DATA",
  TOO_LARGE = "TOO_LARGE",
  RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND",
}

/**
 * Статус генерации:
 *
 * * `PENDING` — ожидает генерации.
 * * `PROCESSING` — генерируется.
 * * `FAILED` — во время генерации произошла ошибка.
 * * `DONE` — отчет или документ готов.
 */
export enum ReportStatusType {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  FAILED = "FAILED",
  DONE = "DONE",
}

/**
 * Услуга Маркета или дополнительный тариф к услуге размещения:
 *
 * * `AGENCY_COMMISSION` — прием платежа покупателя.
 *
 * * `PAYMENT_TRANSFER` — перевод платежа покупателя.
 *
 * * `STORAGE` — хранение товара на складе Маркета в течение суток.
 *
 * * `SURPLUS` — хранение излишков на складе Маркета.
 *
 * * `WITHDRAW` — вывоз товара со склада Маркета.
 *
 * * `FEE` — размещение товара на Маркете.
 *
 * * `DELIVERY_TO_CUSTOMER` — доставка покупателю.
 *
 * * `CROSSREGIONAL_DELIVERY` — доставка в федеральный округ, город или населенный пункт.
 *
 * * `CROSSREGIONAL_DELIVERY_RETURN` — доставка невыкупов и возвратов.
 *
 * * `DISPOSAL` — утилизация.
 *
 * * `SORTING_CENTER_STORAGE` — хранение невыкупов и возвратов.
 *
 * * `EXPRESS_DELIVERY` — экспресс-доставка покупателю.
 *
 * * `FF_XDOC_SUPPLY_BOX` — поставка товара через транзитный склад (за короб).
 *
 * * `FF_XDOC_SUPPLY_PALLET` — поставка товара через транзитный склад (за палету).
 *
 * * `SORTING` — обработка заказа.
 *
 * * `MIDDLE_MILE` — средняя миля.
 *
 * * `RETURN_PROCESSING` — обработка невыкупов и возвратов.
 *
 * * `EXPRESS_CANCELLED_BY_PARTNER` — отмена заказа с экспресс-доставкой.
 *
 * * `CROSSBORDER_DELIVERY` — доставка из-за рубежа.
 *
 * * `INTAKE_SORTING_BULKY_CARGO` — сортировка заказов с крупногабаритными товарами, которые Маркет забрал со склада продавца.
 *
 * * `INTAKE_SORTING_SMALL_GOODS` — сортировка заказов с малогабаритными товарами, которые Маркет забрал со склада продавца.
 *
 * * `INTAKE_SORTING_DAILY` — организация забора заказов со склада продавца.
 *
 * * `FF_STORAGE_BILLING` — хранения товаров на складе.
 *
 * * `CANCELLED_ORDER_FEE_QI` — отмена заказа по вине продавца.
 *
 * * `LATE_ORDER_EXECUTION_FEE_QI` — несвоевременная отгрузка или доставка.
 *
 * Подробнее об услугах Маркета читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/introduction/rates/index.html).
 */
export enum TariffType {
  AGENCY_COMMISSION = "AGENCY_COMMISSION",
  PAYMENT_TRANSFER = "PAYMENT_TRANSFER",
  STORAGE = "STORAGE",
  WITHDRAW = "WITHDRAW",
  SURPLUS = "SURPLUS",
  FEE = "FEE",
  DELIVERY_TO_CUSTOMER = "DELIVERY_TO_CUSTOMER",
  CROSSREGIONAL_DELIVERY = "CROSSREGIONAL_DELIVERY",
  CROSSREGIONAL_DELIVERY_RETURN = "CROSSREGIONAL_DELIVERY_RETURN",
  DISPOSAL = "DISPOSAL",
  SORTING_CENTER_STORAGE = "SORTING_CENTER_STORAGE",
  EXPRESS_DELIVERY = "EXPRESS_DELIVERY",
  FF_XDOC_SUPPLY_BOX = "FF_XDOC_SUPPLY_BOX",
  FF_XDOC_SUPPLY_PALLET = "FF_XDOC_SUPPLY_PALLET",
  SORTING = "SORTING",
  MIDDLE_MILE = "MIDDLE_MILE",
  RETURN_PROCESSING = "RETURN_PROCESSING",
  EXPRESS_CANCELLED_BY_PARTNER = "EXPRESS_CANCELLED_BY_PARTNER",
  CROSSBORDER_DELIVERY = "CROSSBORDER_DELIVERY",
  INTAKE_SORTING_BULKY_CARGO = "INTAKE_SORTING_BULKY_CARGO",
  INTAKE_SORTING_SMALL_GOODS = "INTAKE_SORTING_SMALL_GOODS",
  INTAKE_SORTING_DAILY = "INTAKE_SORTING_DAILY",
  FF_STORAGE_BILLING = "FF_STORAGE_BILLING",
  CANCELLED_ORDER_FEE_QI = "CANCELLED_ORDER_FEE_QI",
  LATE_ORDER_EXECUTION_FEE_QI = "LATE_ORDER_EXECUTION_FEE_QI",
}

/**
 * Источник баллов, которые используются для уменьшения стоимости размещения:
 *
 * * `YANDEX_CASHBACK` — скидка по подписке Яндекс Плюс.
 *
 * * `SUBSIDY` — скидка Маркета (по акциям, промокодам, купонам и т. д.)
 *
 * * `DELIVERY` — скидка за доставку (:no-translate[DBS]).
 */
export enum OrdersStatsSubsidyType {
  YANDEX_CASHBACK = "YANDEX_CASHBACK",
  SUBSIDY = "SUBSIDY",
  DELIVERY = "DELIVERY",
}

/**
 * Тип операции с баллами, которые используются для уменьшения стоимости размещения:
 *
 * * `ACCRUAL` — начисление баллов.
 * * `DEDUCTION` — списание баллов.
 */
export enum OrdersStatsSubsidyOperationType {
  ACCRUAL = "ACCRUAL",
  DEDUCTION = "DEDUCTION",
}

/**
 * Услуга:
 *
 * * `FEE` — размещение товара на Маркете.
 * * `FULFILLMENT` — складская обработка. Не возвращается с 1 января 2024 года.
 * * `LOYALTY_PARTICIPATION_FEE` — участие в программе лояльности и отзывы за баллы.
 * * `AUCTION_PROMOTION` — буст продаж с оплатой за продажи.
 * * `INSTALLMENT` — рассрочка. Не возвращается с 24 февраля 2022 года.
 * * `DELIVERY_TO_CUSTOMER` — доставка покупателю :no-translate[(FBY, FBS)]. Для DBS и Экспресс — если заказ возвращается через логистику Маркета.
 * * `EXPRESS_DELIVERY_TO_CUSTOMER` — экспресс-доставка покупателю (Экспресс).
 * * `AGENCY` — прием платежа покупателя.
 * * `PAYMENT_TRANSFER` — перевод платежа покупателя.
 * * `RETURNED_ORDERS_STORAGE` — хранение невыкупов и возвратов (:no-translate[FBS]). Для :no-translate[DBS] и Экспресс — если заказ возвращается через логистику Маркета.
 * * `SORTING` — обработка заказа (:no-translate[FBS]).
 * * `INTAKE_SORTING` — организация забора заказов со склада продавца (:no-translate[FBS]).
 * * `RETURN_PROCESSING` — обработка заказов на складе (:no-translate[FBS]). Для :no-translate[DBS] и Экспресс — если заказ возвращается через логистику Маркета.
 * * `ILLIQUID_GOODS_SALE` — вознаграждение за продажу невывезенных товаров.
 */
export enum OrdersStatsCommissionType {
  FEE = "FEE",
  FULFILLMENT = "FULFILLMENT",
  LOYALTY_PARTICIPATION_FEE = "LOYALTY_PARTICIPATION_FEE",
  AUCTION_PROMOTION = "AUCTION_PROMOTION",
  INSTALLMENT = "INSTALLMENT",
  DELIVERY_TO_CUSTOMER = "DELIVERY_TO_CUSTOMER",
  EXPRESS_DELIVERY_TO_CUSTOMER = "EXPRESS_DELIVERY_TO_CUSTOMER",
  AGENCY = "AGENCY",
  PAYMENT_TRANSFER = "PAYMENT_TRANSFER",
  RETURNED_ORDERS_STORAGE = "RETURNED_ORDERS_STORAGE",
  SORTING = "SORTING",
  INTAKE_SORTING = "INTAKE_SORTING",
  RETURN_PROCESSING = "RETURN_PROCESSING",
  ILLIQUID_GOODS_SALE = "ILLIQUID_GOODS_SALE",
}

/**
 * Способ денежного перевода:
 * - `BUYER` — оплата или возврат деньгами.
 *
 * Устаревшие способы:
 * - `CASHBACK`.
 * - `MARKETPLACE`.
 * - `SPLIT`.
 */
export enum OrdersStatsPaymentSourceType {
  BUYER = "BUYER",
  CASHBACK = "CASHBACK",
  MARKETPLACE = "MARKETPLACE",
  SPLIT = "SPLIT",
}

/**
 * Тип денежного перевода:
 * - `PAYMENT` — оплата.
 * - `REFUND` — возврат.
 */
export enum OrdersStatsPaymentType {
  PAYMENT = "PAYMENT",
  REFUND = "REFUND",
}

/**
 * Тип товара:
 *
 * * `FIT` — товар надлежащего качества.
 *
 * * `DEFECT` — товар бракованный.
 *
 * * `EXPIRED` — товар с истекшим сроком годности.
 */
export enum OrdersStatsStockType {
  FIT = "FIT",
  DEFECT = "DEFECT",
  EXPIRED = "EXPIRED",
}

/**
 * Статус товара:
 *
 * * `REJECTED` — товар был добавлен в созданный заказ, но не был оплачен.
 * * `RETURNED` — товар вернули.
 */
export enum OrdersStatsItemStatusType {
  REJECTED = "REJECTED",
  RETURNED = "RETURNED",
}

/**
 * Тип скидки или цена на товар:
 * - `BUYER` — цена на товар с учетом скидок, в том числе купонов.
 * - `CASHBACK` — баллы Плюса.
 * - `MARKETPLACE` — купоны.
 */
export enum OrdersStatsPriceType {
  BUYER = "BUYER",
  CASHBACK = "CASHBACK",
  MARKETPLACE = "MARKETPLACE",
}

/**
 * Тип оплаты заказа:
 * - `POSTPAID` — заказ оплачен после того, как был получен.
 * - `PREPAID` — заказ оплачен до того, как был получен.
 * - `UNKNOWN` — неизвестный тип оплаты. Скорее всего покупатель отменил или вернул заказ или не было его оплаты.
 */
export enum OrdersStatsOrderPaymentType {
  POSTPAID = "POSTPAID",
  PREPAID = "PREPAID",
  UNKNOWN = "UNKNOWN",
}

/**
 * Текущий статус заказа:
 *
 * * `CANCELLED_BEFORE_PROCESSING` — заказ отменен до начала его обработки.
 *
 * * `CANCELLED_IN_DELIVERY` — заказ отменен во время его доставки.
 *
 * * `CANCELLED_IN_PROCESSING` — заказ отменен во время его обработки.
 *
 * * `DELIVERY` — заказ передан службе доставки.
 *
 * * `DELIVERED` — заказ доставлен.
 *
 * * `PARTIALLY_DELIVERED` — заказ частично доставлен.
 *
 *     {% note warning "Статус заказа может перейти в `PARTIALLY_DELIVERED` не сразу" %}
 *
 *     Если в доставленном заказе был невыкуп, статус изменится только после получения заказа на складе Маркета.
 *
 *     {% endnote %}
 *
 * * `PARTIALLY_RETURNED` — заказ частично возвращен покупателем.
 *
 * * `PENDING` — заказ ожидает подтверждения.
 *
 * * `PICKUP` — заказ доставлен в пункт выдачи.
 *
 * * `PROCESSING` — заказ в обработке.
 *
 * * `RESERVED` — товар зарезервирован на складе.
 *
 * * `RETURNED` — заказ полностью возвращен покупателем.
 *
 * * `UNKNOWN` — неизвестный статус заказа.
 *
 * * `UNPAID` — заказ от юридического лица ожидает оплаты.
 *
 * * `LOST` — заказ утерян.
 */
export enum OrderStatsStatusType {
  CANCELLED_BEFORE_PROCESSING = "CANCELLED_BEFORE_PROCESSING",
  CANCELLED_IN_DELIVERY = "CANCELLED_IN_DELIVERY",
  CANCELLED_IN_PROCESSING = "CANCELLED_IN_PROCESSING",
  DELIVERY = "DELIVERY",
  DELIVERED = "DELIVERED",
  PARTIALLY_DELIVERED = "PARTIALLY_DELIVERED",
  PARTIALLY_RETURNED = "PARTIALLY_RETURNED",
  PENDING = "PENDING",
  PICKUP = "PICKUP",
  PROCESSING = "PROCESSING",
  RESERVED = "RESERVED",
  RETURNED = "RETURNED",
  UNKNOWN = "UNKNOWN",
  UNPAID = "UNPAID",
  LOST = "LOST",
}

/**
 * Тип остатков товаров на складе:
 *
 * * `AVAILABLE` (соответствует типу «Доступный к заказу» в отчете «Остатки на складе» в кабинете продавца на Маркете) — товар, доступный для продажи.
 *
 * * `DEFECT` (соответствует типу «Брак») — товар с браком.
 *
 * * `EXPIRED` (соответствует типу «Просрочен») — товар с истекшим сроком годности.
 *
 * * `FIT` (соответствует типу «Годный») — товар, который доступен для продажи или уже зарезервирован.
 *
 * * `FREEZE` — товар, который зарезервирован для заказов.
 *
 * * `QUARANTINE` (соответствует типу «Карантин») — товар, временно недоступный для продажи (например, товар перемещают из одного помещения склада в другое).
 *
 * * `UTILIZATION` — товар, который будет утилизирован.
 */
export enum WarehouseStockType {
  FIT = "FIT",
  FREEZE = "FREEZE",
  AVAILABLE = "AVAILABLE",
  QUARANTINE = "QUARANTINE",
  UTILIZATION = "UTILIZATION",
  DEFECT = "DEFECT",
  EXPIRED = "EXPIRED",
}

/**
 * Оценка оборачиваемости.
 *
 * |enum|Диапазон оборачиваемости|Комментарий|
 * |-|-|-|
 * |`LOW`|`turnoverDays` ≥ 120||
 * |`ALMOST_LOW`|100 ≤ `turnoverDays` < 120||
 * |`HIGH`|45 ≤ `turnoverDays` < 100||
 * |`VERY_HIGH`|0 ≤ `turnoverDays` < 45||
 * |`NO_SALES`|—|Продаж нет.|
 * |`FREE_STORE`|Любое значение.|Платить за хранение товаров этой категории не требуется.|
 */
export enum TurnoverType {
  LOW = "LOW",
  ALMOST_LOW = "ALMOST_LOW",
  HIGH = "HIGH",
  VERY_HIGH = "VERY_HIGH",
  NO_SALES = "NO_SALES",
  FREE_STORE = "FREE_STORE",
}

/**
 * Имя параметра причины скрытия товара по цене.
 *
 * * `CURRENT_PRICE` — цена, из-за которой товар попал в карантин.
 * * `LAST_VALID_PRICE` — последняя цена до попадания в карантин (только для карантина типа `PRICE_CHANGE`).
 * * `MIN_PRICE` — порог попадания в карантин (только для карантина типов `LOW_PRICE` и `LOW_PRICE_PROMO`).
 * * `CURRENCY` — валюта.
 */
export enum PriceQuarantineVerdictParamNameType {
  CURRENT_PRICE = "CURRENT_PRICE",
  LAST_VALID_PRICE = "LAST_VALID_PRICE",
  MIN_PRICE = "MIN_PRICE",
  CURRENCY = "CURRENCY",
}

/**
 * Типы карантина:
 *
 * * `PRICE_CHANGE` — новая цена слишком сильно отличается от прежней. В поле `params` будет  новая цена `CURRENT_PRICE` и последняя цена до попадания в карантин `LAST_VALID_PRICE`.
 * * `LOW_PRICE` — установленная цена слишком сильно отличается от рыночной. В поле `params` будет установленная вами цена `CURRENT_PRICE` и порог попадания в карантин `MIN_PRICE`.
 * * `LOW_PRICE_PROMO` — цена после применения акций слишком сильно отличается от рыночной. В поле `params` будет цена после применения акций `CURRENT_PRICE` и порог попадания в карантин `MIN_PRICE`.
 */
export enum PriceQuarantineVerdictType {
  PRICE_CHANGE = "PRICE_CHANGE",
  LOW_PRICE = "LOW_PRICE",
  LOW_PRICE_PROMO = "LOW_PRICE_PROMO",
}

/**
 * Тип цены:
 *
 * * `BUYBOX` — самая низкая цена на товар, по которой он продается сейчас. Эта цена обновляется в режиме реального времени. Если вы установите цену ниже, начнет показываться ваше предложение. Если для этого значения в параметре `price` указана цена, которая совпадает с вашей, значит, ваш товар уже показывается на витрине. Если кроме вас этот товар продают другие продавцы по такой же цене, их предложения также будут отображаться вместе с вашими по очереди.
 * * `DEFAULT_OFFER` — рекомендованная Маркетом цена, которая привлекает покупателей. Рассчитывается только для популярных на сервисе товаров и обновляется раз в четыре часа.
 * * `MIN_PRICE_MARKET` — минимальная цена на Маркете. Самая низкая цена среди всех предложений товара на Маркете во всех регионах, включая те, которые не видны на витрине. Эта цена обновляется в режиме реального времени и обеспечивает большее количество показов на Маркете, чем самая низкая или рекомендованная цена.
 */
export enum PriceSuggestType {
  BUYBOX = "BUYBOX",
  DEFAULT_OFFER = "DEFAULT_OFFER",
  MIN_PRICE_MARKET = "MIN_PRICE_MARKET",
}

/**
 * Тип причины, по которой товар не прошел модерацию:
 *
 * * `ASSORTMENT` — товар производится в разных вариантах. Каждый из них нужно описать как отдельный товар (параметр `offerMappings` в запросе [POST businesses/{businessId}/offer-mappings/update](../../reference/business-assortment/updateOfferMappings.md) или строка в каталоге, если вы загружаете товары через кабинет продавца на Маркете).
 * * `CANCELLED` — товар отозван с модерации по вашей инициативе.
 * * `CONFLICTING_INFORMATION` _(ранее ошибочно `CONFLICTING`)_ — вы предоставили противоречивую информацию о товаре. Параметры, которые нужно исправить, указаны в параметре `payload`.
 * * `OTHER` — товар не прошел модерацию по другой причине. Обратитесь в службу поддержки или к вашему менеджеру.
 * * `DEPARTMENT_FROZEN` — правила размещения товаров в данной категории перерабатываются, поэтому товар пока не может пройти модерацию.
 * * `INCORRECT_INFORMATION` — информация о товаре, которую вы предоставили, противоречит описанию от производителя. Параметры, которые нужно исправить, указаны в параметре `payload`.
 * * `LEGAL_CONFLICT` — товар не прошел модерацию по юридическим причинам. Например, он официально не продается в России или у вас нет разрешения на его продажу.
 * * `NEED_CLASSIFICATION_INFORMATION` — информации о товаре, которую вы предоставили, не хватает, чтобы отнести его к категории. Проверьте, что правильно указали название, категорию, производителя и страны производства товара, а также URL изображений или страниц с описанием, по которым можно идентифицировать товар.
 * * `NEED_INFORMATION` — товар раньше не продавался в России и пока не размещается на Маркете. Для него можно создать карточку. Подробнее см. в разделе [Работа с карточкой товара](https://yandex.ru/support/marketplace/assortment/content/index.html) Справки Маркета для продавцов.
 * * `NEED_PICTURES` — для идентификации товара нужны его изображения. Отправьте URL изображений товара в запросе [POST businesses/{businessId}/offer-mappings/update](../../reference/business-assortment/updateOfferMappings.md) или загрузите обновленный каталог через кабинет продавца на Маркете.
 * * `NEED_VENDOR` — неверно указан производитель товара.
 * * `NO_CATEGORY`, `NO_KNOWLEDGE` — товары из указанной категории пока не размещаются на Маркете. Если категория появится, товар будет снова отправлен на модерацию.
 * * `NO_PARAMETERS_IN_SHOP_TITLE` — товар производится в разных вариантах, и из указанного названия непонятно, о каком идет речь. Параметры, которые нужно добавить в название товара, указаны в параметре `payload`.
 * * `NO_SIZE_MEASURE` — для этого товара нужна размерная сетка. Отправьте ее в службу поддержки или вашему менеджеру. Требования к размерной сетке указаны в параметре `payload`.
 * * `SAMPLE_LINE` — товар не прошел модерацию из-за лишней строки.
 */
export enum OfferProcessingNoteType {
  ASSORTMENT = "ASSORTMENT",
  CANCELLED = "CANCELLED",
  CONFLICTING_INFORMATION = "CONFLICTING_INFORMATION",
  OTHER = "OTHER",
  DEPARTMENT_FROZEN = "DEPARTMENT_FROZEN",
  INCORRECT_INFORMATION = "INCORRECT_INFORMATION",
  LEGAL_CONFLICT = "LEGAL_CONFLICT",
  NEED_CLASSIFICATION_INFORMATION = "NEED_CLASSIFICATION_INFORMATION",
  NEED_INFORMATION = "NEED_INFORMATION",
  NEED_PICTURES = "NEED_PICTURES",
  NEED_VENDOR = "NEED_VENDOR",
  NO_CATEGORY = "NO_CATEGORY",
  NO_KNOWLEDGE = "NO_KNOWLEDGE",
  NO_PARAMETERS_IN_SHOP_TITLE = "NO_PARAMETERS_IN_SHOP_TITLE",
  NO_SIZE_MEASURE = "NO_SIZE_MEASURE",
  SAMPLE_LINE = "SAMPLE_LINE",
}

/**
 * День недели:
 *
 * * `MONDAY` — понедельник.
 * * `TUESDAY` — вторник.
 * * `WEDNESDAY` — среда.
 * * `THURSDAY` — четверг.
 * * `FRIDAY` — пятница.
 * * `SATURDAY` — суббота.
 * * `SUNDAY` — воскресенье.
 */
export enum DayOfWeekType {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}

/**
 * Планы по поставкам:
 *
 * * `ACTIVE` — поставки будут.
 * * `INACTIVE` — поставок не будет: товар есть на складе, но вы больше не планируете его поставлять. Через 60 дней после того, как товар закончится на складе, этот статус изменится на `DELISTED`.
 * * `DELISTED` — архив: товар закончился на складе, и его поставок больше не будет. Если товар вернется на склад (например, покупатель вернет заказ), этот статус изменится на `INACTIVE`.
 */
export enum OfferAvailabilityStatusType {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  DELISTED = "DELISTED",
}

/**
 * Статус публикации товара:
 *
 * * `UNKNOWN` — неизвестный статус.
 * * `READY` — товар прошел модерацию. Чтобы разместить его на Маркете, установите для него цену.
 * * `IN_WORK` — товар проходит модерацию. Это занимает несколько дней.
 * * `NEED_INFO` — товар не прошел модерацию из-за ошибок или недостающих сведений в описании товара. Информация о причинах отклонения возвращается в параметре `notes`.
 * * `NEED_MAPPING` — у товара нельзя создать карточку.
 * * `NEED_CONTENT` — для товара без SKU на Маркете (`marketSku`) нужно найти карточку самостоятельно (через API или кабинет продавца на Маркете) или создать ее, если товар еще не продается на Маркете.
 * * `CONTENT_PROCESSING` — товар находится на модерации.
 * * `SUSPENDED` — товар не прошел модерацию, так как Маркет пока не размещает подобные товары.
 * * `REJECTED` — товар не прошел модерацию, так как Маркет не планирует размещать подобные товары.
 * * `REVIEW` — принимается решение о размещении товара.
 * * `CREATE_ERROR` — не удалось создать карточку товара.
 * * `UPDATE_ERROR` — у карточки товара есть непримененные изменения.
 */
export enum OfferProcessingStatusType {
  UNKNOWN = "UNKNOWN",
  READY = "READY",
  IN_WORK = "IN_WORK",
  NEED_INFO = "NEED_INFO",
  NEED_MAPPING = "NEED_MAPPING",
  NEED_CONTENT = "NEED_CONTENT",
  CONTENT_PROCESSING = "CONTENT_PROCESSING",
  SUSPENDED = "SUSPENDED",
  REJECTED = "REJECTED",
  REVIEW = "REVIEW",
  CREATE_ERROR = "CREATE_ERROR",
  UPDATE_ERROR = "UPDATE_ERROR",
}

/**
 * Вид маппинга:
 * * `ALL` — все товары.
 * * `ACTIVE` — готовые к продаже товары.
 */
export enum OfferMappingKindType {
  ACTIVE = "ACTIVE",
  ALL = "ALL",
}

/**
 * Причина, по которой товар не удалось поместить в архив:
 *
 * * `OFFER_HAS_STOCKS` — товар хранится на складе Маркета.
 *
 * * `UNKNOWN` — неизвестная причина ошибки. Скорее всего произошел сбой на стороне Маркета. Если ошибка повторяется долгое время, обратитесь в поддержку.
 */
export enum AddOffersToArchiveErrorType {
  OFFER_HAS_STOCKS = "OFFER_HAS_STOCKS",
  UNKNOWN = "UNKNOWN",
}

/**
 * Типы ошибок и предупреждений:
 *
 * * `UNKNOWN_CATEGORY` — указана неизвестная категория.
 * * `INVALID_CATEGORY` — указана нелистовая категория. Укажите ту, которая не имеет дочерних категорий.
 * * `EMPTY_MARKET_CATEGORY` — не указана категория Маркета при передаче характеристик категории.
 * * `UNKNOWN_PARAMETER` — передана характеристика, которой нет среди характеристик категории.
 * * `UNEXPECTED_BOOLEAN_VALUE` — вместо boolean-значения передано что-то другое.
 * * `NUMBER_FORMAT` — передана строка, не обозначающая число, вместо числа.
 * * `INVALID_UNIT_ID` — передана единица измерения, недопустимая для характеристики.
 * * `INVALID_GROUP_ID_LENGTH` — в названии превышено допустимое значение символов — 255.
 * * `INVALID_GROUP_ID_CHARACTERS` — переданы [недопустимые символы](*ascii-code).
 * * `INVALID_PICKER_URL` — передана ссылка на изображение для миниатюры, которой нет в переданных ссылках на изображение товара.
 * * `LOCKED_DIMENSIONS` — переданы габариты упаковки, которые нельзя изменить.
 * * `INVALID_COMMODITY_CODE` — передан некорректный товарный код.
 *
 * Проверить, какие категорийные характеристики доступны для заданной категории, и получить их настройки можно с помощью запроса [POST category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters).
 */
export enum OfferMappingErrorType {
  UNKNOWN_CATEGORY = "UNKNOWN_CATEGORY",
  INVALID_CATEGORY = "INVALID_CATEGORY",
  EMPTY_MARKET_CATEGORY = "EMPTY_MARKET_CATEGORY",
  UNKNOWN_PARAMETER = "UNKNOWN_PARAMETER",
  UNEXPECTED_BOOLEAN_VALUE = "UNEXPECTED_BOOLEAN_VALUE",
  NUMBER_FORMAT = "NUMBER_FORMAT",
  INVALID_UNIT_ID = "INVALID_UNIT_ID",
  INVALID_GROUP_ID_LENGTH = "INVALID_GROUP_ID_LENGTH",
  INVALID_GROUP_ID_CHARACTERS = "INVALID_GROUP_ID_CHARACTERS",
  INVALID_PICKER_URL = "INVALID_PICKER_URL",
  LOCKED_DIMENSIONS = "LOCKED_DIMENSIONS",
  INVALID_COMMODITY_CODE = "INVALID_COMMODITY_CODE",
}

/**
 * Значения параметров, которые хотите удалить, и соответствующие параметры в `UpdateOfferDTO`, в которых вы передали эти значения ранее:
 *
 * * `ADDITIONAL_EXPENSES` — дополнительные расходы на товар (параметр `additionalExpenses`).
 * * `ADULT` — пометка 18+ (параметр `adult`)
 * * `AGE` — возрастное ограничение для детей (параметр `age`).
 * * `BARCODES` — штрихкод (параметр `barcodes`).
 * * `BOX_COUNT` — количество грузовых мест (параметр `boxCount`).
 * * `CERTIFICATES` — номера документов на товар (параметр `certificates`).
 * * `COMMODITY_CODES` — товарные коды (параметр `commodityCodes`).
 * * `CONDITION` — состояние уцененного товара (параметр `condition`).
 * * `CUSTOMS_COMMODITY_CODE` — код товара в ТН ВЭД (параметр `customsCommodityCode`).
 * * `DESCRIPTION` — описание товара (параметр `description`).
 * * `DOWNLOADABLE` — признак цифрового товара (параметр `downloadable`).
 * * `FIRST_VIDEO_AS_COVER` — использование первого видео в карточке как видеообложки (параметр `firstVideoAsCover`).
 * * `GUARANTEE_PERIOD` — гарантийный срок (параметр `guaranteePeriod`).
 * * `LIFE_TIME` — срок службы (параметр `lifeTime`).
 * * `MANUALS` — список инструкций по использованию товара (параметр `manuals`).
 * * `MANUFACTURER_COUNTRIES` — страна производства (параметр `manufacturerCountries`).
 * * `PARAMETERS` — характеристики товара (параметры `params`, `parameterValues`).
 * * `PICTURES` — ссылки на изображения товара (параметр `pictures`).
 * * `PURCHASE_PRICE` — себестоимость (параметр `purchasePrice`).
 * * `SHELF_LIFE` — срок годности (параметр `shelfLife`).
 * * `TAGS` — метки товара, которые использует магазин (параметр `tags`).
 * * `TYPE` — особый тип товара (параметр `type`).
 * * `VENDOR_CODE` — название бренда или производителя (параметр `vendorCode`).
 * * `VIDEOS` — ссылки на видео товара (параметр `videos`).
 */
export enum DeleteOfferParameterType {
  ADDITIONAL_EXPENSES = "ADDITIONAL_EXPENSES",
  ADULT = "ADULT",
  AGE = "AGE",
  BARCODES = "BARCODES",
  BOX_COUNT = "BOX_COUNT",
  CERTIFICATES = "CERTIFICATES",
  COMMODITY_CODES = "COMMODITY_CODES",
  CONDITION = "CONDITION",
  CUSTOMS_COMMODITY_CODE = "CUSTOMS_COMMODITY_CODE",
  DESCRIPTION = "DESCRIPTION",
  DOWNLOADABLE = "DOWNLOADABLE",
  FIRST_VIDEO_AS_COVER = "FIRST_VIDEO_AS_COVER",
  GUARANTEE_PERIOD = "GUARANTEE_PERIOD",
  LIFE_TIME = "LIFE_TIME",
  MANUALS = "MANUALS",
  MANUFACTURER_COUNTRIES = "MANUFACTURER_COUNTRIES",
  PARAMETERS = "PARAMETERS",
  PICTURES = "PICTURES",
  PURCHASE_PRICE = "PURCHASE_PRICE",
  SHELF_LIFE = "SHELF_LIFE",
  TAGS = "TAGS",
  TYPE = "TYPE",
  VENDOR_CODE = "VENDOR_CODE",
  VIDEOS = "VIDEOS",
}

/**
 * Состояние загрузки медиафайла:
 *
 * * `UPLOADING` — загружается.
 * * `UPLOADED` — успешно загружен.
 * * `FAILED` — при загрузке произошла ошибка. Повторите попытку позже.
 */
export enum MediaFileUploadStateType {
  UPLOADING = "UPLOADING",
  UPLOADED = "UPLOADED",
  FAILED = "FAILED",
}

/**
 * Информация о доступности или недоступности.
 *
 * * `FINE` — доступно.
 * * `REJECT` — недоступно.
 */
export enum OfferSellingProgramStatusType {
  FINE = "FINE",
  REJECT = "REJECT",
}

/**
 * Модель размещения:
 *
 * * `FBY` — FBY.
 * * `FBS` — FBS.
 * * `DBS` — DBS.
 * * `EXPRESS` — Экспресс.
 */
export enum SellingProgramType {
  FBY = "FBY",
  FBS = "FBS",
  DBS = "DBS",
  EXPRESS = "EXPRESS",
}

/**
 * Статус товара:
 *
 * * `PUBLISHED` — Готов к продаже.
 * * `CHECKING` — На проверке.
 * * `DISABLED_BY_PARTNER` — Скрыт вами.
 * * `REJECTED_BY_MARKET` — Отклонен.
 * * `DISABLED_AUTOMATICALLY` — Исправьте ошибки.
 * * `CREATING_CARD` — Создается карточка.
 * * `NO_CARD` — Нужна карточка.
 * * `NO_STOCKS` — Нет на складе.
 * * `ARCHIVED` — В архиве.
 *
 * [Что обозначает каждый из статусов](https://yandex.ru/support/marketplace/assortment/add/statuses.html)
 */
export enum OfferCampaignStatusType {
  PUBLISHED = "PUBLISHED",
  CHECKING = "CHECKING",
  DISABLED_BY_PARTNER = "DISABLED_BY_PARTNER",
  DISABLED_AUTOMATICALLY = "DISABLED_AUTOMATICALLY",
  REJECTED_BY_MARKET = "REJECTED_BY_MARKET",
  CREATING_CARD = "CREATING_CARD",
  NO_CARD = "NO_CARD",
  NO_STOCKS = "NO_STOCKS",
  ARCHIVED = "ARCHIVED",
}

/**
 * Единицы измерения возраста:
 *
 * * `YEAR` — год.
 * * `MONTH` — месяц.
 */
export enum AgeUnitType {
  YEAR = "YEAR",
  MONTH = "MONTH",
}

/**
 * Особый тип товара:
 *
 * * `DEFAULT` — товары, для которых вы передавали особый тип ранее и хотите убрать его.
 * * `MEDICINE` — лекарства.
 * * `BOOK` — бумажные и электронные книги.
 * * `AUDIOBOOK` — аудиокниги.
 * * `ARTIST_TITLE` — музыкальная и видеопродукция.
 * * `ON_DEMAND` — товары на заказ.
 * * `ALCOHOL` — алкоголь.
 *
 * {% note info "Если ваш товар — книга" %}
 *
 * Укажите год издания в характеристиках товара. [Подробнее о параметре](../../reference/business-assortment/updateOfferMappings.md#offerparamdto)
 *
 * {% endnote %}
 */
export enum OfferType {
  DEFAULT = "DEFAULT",
  MEDICINE = "MEDICINE",
  BOOK = "BOOK",
  AUDIOBOOK = "AUDIOBOOK",
  ARTIST_TITLE = "ARTIST_TITLE",
  ON_DEMAND = "ON_DEMAND",
  ALCOHOL = "ALCOHOL",
}

/**
 * Внешний вид товара:
 *
 * * `PERFECT` — идеальный.
 * * `EXCELLENT` — отличный.
 * * `GOOD` — хороший.
 * * `NOT_SPECIFIED` — не выбран.
 */
export enum OfferConditionQualityType {
  PERFECT = "PERFECT",
  EXCELLENT = "EXCELLENT",
  GOOD = "GOOD",
  NOT_SPECIFIED = "NOT_SPECIFIED",
}

/**
 * Тип уценки:
 *
 * * `PREOWNED` —  бывший в употреблении товар, раньше принадлежал другому человеку.
 * * `SHOWCASESAMPLE` — витринный образец.
 * * `REFURBISHED` — повторная продажа товара.
 * * `REDUCTION` — товар с дефектами.
 * * `RENOVATED` — восстановленный товар.
 * * `NOT_SPECIFIED` — не выбран.
 *
 * `REFURBISHED` — специальное значение для одежды, обуви и аксессуаров. Используется только для уцененных товаров из этой категории. Другие значения для одежды, обуви и аксессуаров не используются.
 */
export enum OfferConditionType {
  PREOWNED = "PREOWNED",
  SHOWCASESAMPLE = "SHOWCASESAMPLE",
  REFURBISHED = "REFURBISHED",
  REDUCTION = "REDUCTION",
  RENOVATED = "RENOVATED",
  NOT_SPECIFIED = "NOT_SPECIFIED",
}

/**
 * Тип товарного кода:
 *
 * * `CUSTOMS_COMMODITY_CODE` — код товара в единой Товарной номенклатуре внешнеэкономической деятельности (ТН ВЭД) — 10 или 14 цифр без пробелов.
 * * `IKPU_CODE` — идентификационный код продукции и услуг (ИКПУ) в Узбекистане – 17 цифр без пробелов.
 *
 * Не передавайте несколько кодов одного типа.
 */
export enum CommodityCodeType {
  CUSTOMS_COMMODITY_CODE = "CUSTOMS_COMMODITY_CODE",
  IKPU_CODE = "IKPU_CODE",
}

/**
 * Единица измерения времени:
 *
 * * `HOUR` — час.
 * * `DAY` — сутки.
 * * `WEEK` — неделя.
 * * `MONTH` — месяц.
 * * `YEAR` — год.
 */
export enum TimeUnitType {
  HOUR = "HOUR",
  DAY = "DAY",
  WEEK = "WEEK",
  MONTH = "MONTH",
  YEAR = "YEAR",
}

/**
 * Статус карточки товара:
 *
 * * `HAS_CARD_CAN_NOT_UPDATE` — Карточка Маркета.
 * * `HAS_CARD_CAN_UPDATE` — Можно дополнить.
 * * `HAS_CARD_CAN_UPDATE_ERRORS` — Изменения не приняты.
 * * `HAS_CARD_CAN_UPDATE_PROCESSING` — Изменения на проверке.
 * * `NO_CARD_NEED_CONTENT` — Создайте карточку.
 * * `NO_CARD_MARKET_WILL_CREATE` — Создаст Маркет.
 * * `NO_CARD_ERRORS` — Не создана из-за ошибки.
 * * `NO_CARD_PROCESSING` — Проверяем данные.
 * * `NO_CARD_ADD_TO_CAMPAIGN` — Разместите товар в магазине.
 *
 * [Что обозначает каждый из статусов](https://yandex.ru/support/marketplace/assortment/content/statuses.html)
 */
export enum OfferCardStatusType {
  HAS_CARD_CAN_NOT_UPDATE = "HAS_CARD_CAN_NOT_UPDATE",
  HAS_CARD_CAN_UPDATE = "HAS_CARD_CAN_UPDATE",
  HAS_CARD_CAN_UPDATE_ERRORS = "HAS_CARD_CAN_UPDATE_ERRORS",
  HAS_CARD_CAN_UPDATE_PROCESSING = "HAS_CARD_CAN_UPDATE_PROCESSING",
  NO_CARD_NEED_CONTENT = "NO_CARD_NEED_CONTENT",
  NO_CARD_MARKET_WILL_CREATE = "NO_CARD_MARKET_WILL_CREATE",
  NO_CARD_ERRORS = "NO_CARD_ERRORS",
  NO_CARD_PROCESSING = "NO_CARD_PROCESSING",
  NO_CARD_ADD_TO_CAMPAIGN = "NO_CARD_ADD_TO_CAMPAIGN",
}

/**
 * Язык:
 *
 * * `RU` — русский.
 * * `UZ` — узбекский.
 */
export enum CatalogLanguageType {
  RU = "RU",
  UZ = "UZ",
}

/**
 * Формат страницы:
 * * `A4` — формат страницы :no-translate[A4].
 * * `A8` — формат страницы :no-translate[A8].
 * @default "A8"
 */
export enum ShipmentPalletLabelPageFormatType {
  A4 = "A4",
  A8 = "A8",
}

/**
 * Действия с отгрузкой:
 *
 * * `CONFIRM` — подтвердить отгрузку.
 * * `DOWNLOAD_ACT` — скачать акт приема-передачи отгрузки.
 * * `DOWNLOAD_INBOUND_ACT` — скачать список принятых заказов.
 * * `DOWNLOAD_DISCREPANCY_ACT` — скачать акт расхождений.
 * * `DOWNLOAD_TRANSPORTATION_WAYBILL` — скачать транспортную накладную.
 * * `CHANGE_PALLETS_COUNT` — указать количество палет.
 */
export enum ShipmentActionType {
  CONFIRM = "CONFIRM",
  DOWNLOAD_ACT = "DOWNLOAD_ACT",
  DOWNLOAD_INBOUND_ACT = "DOWNLOAD_INBOUND_ACT",
  DOWNLOAD_DISCREPANCY_ACT = "DOWNLOAD_DISCREPANCY_ACT",
  DOWNLOAD_TRANSPORTATION_WAYBILL = "DOWNLOAD_TRANSPORTATION_WAYBILL",
  CHANGE_PALLETS_COUNT = "CHANGE_PALLETS_COUNT",
}

/**
 * Статус отгрузки:
 *
 * * `OUTBOUND_CREATED` — формируется.
 * * `OUTBOUND_READY_FOR_CONFIRMATION` — можно обрабатывать.
 * * `OUTBOUND_CONFIRMED` — подтверждена и готова к отправке.
 * * `OUTBOUND_SIGNED` — по ней подписан электронный акт приема-передачи.
 * * `ACCEPTED` — принята в сортировочном центре или пункте приема.
 * * `ACCEPTED_WITH_DISCREPANCIES` — принята с расхождениями.
 * * `FINISHED` — завершена.
 * * `ERROR` — отменена из-за ошибки.
 */
export enum ShipmentStatusType {
  OUTBOUND_CREATED = "OUTBOUND_CREATED",
  OUTBOUND_READY_FOR_CONFIRMATION = "OUTBOUND_READY_FOR_CONFIRMATION",
  OUTBOUND_CONFIRMED = "OUTBOUND_CONFIRMED",
  OUTBOUND_SIGNED = "OUTBOUND_SIGNED",
  FINISHED = "FINISHED",
  ACCEPTED = "ACCEPTED",
  ACCEPTED_WITH_DISCREPANCIES = "ACCEPTED_WITH_DISCREPANCIES",
  ERROR = "ERROR",
}

/**
 * Способ отгрузки заказов:
 *
 * * `IMPORT` — вы самостоятельно привозите заказы в выбранный сортировочный центр или пункт приема заказов.
 * * `WITHDRAW` — вы отгружаете заказы со своего склада курьерам Яндекс Маркета.
 */
export enum ShipmentType {
  IMPORT = "IMPORT",
  WITHDRAW = "WITHDRAW",
}

/**
 * Причина отказа:
 *
 * * `ISSUE_WITH_THE_PRODUCT_WAS_NOT_CONFIRMED` — проблема с товаром не подтвердилась.
 * * `MECHANICAL_DAMAGE` — есть механические повреждения товара.
 * * `WARRANTY_PERIOD_HAS_EXPIRED` — истек гарантийный срок.
 * * `CONFIGURATION_OR_PACKAGING_COMPROMISED` — нарушена комплектация или упаковка.
 * * `PRODUCT_APPEARANCE_COMPROMISED` — нарушен товарный вид.
 * * `WARRANTY_TERMS_VIOLATED` — нарушены условия гарантии.
 * * `DEVICE_ACTIVATED` — устройство активировано.
 */
export enum ReturnRequestDecisionReasonType {
  ISSUE_WITH_THE_PRODUCT_WAS_NOT_CONFIRMED = "ISSUE_WITH_THE_PRODUCT_WAS_NOT_CONFIRMED",
  MECHANICAL_DAMAGE = "MECHANICAL_DAMAGE",
  WARRANTY_PERIOD_HAS_EXPIRED = "WARRANTY_PERIOD_HAS_EXPIRED",
  CONFIGURATION_OR_PACKAGING_COMPROMISED = "CONFIGURATION_OR_PACKAGING_COMPROMISED",
  PRODUCT_APPEARANCE_COMPROMISED = "PRODUCT_APPEARANCE_COMPROMISED",
  WARRANTY_TERMS_VIOLATED = "WARRANTY_TERMS_VIOLATED",
  DEVICE_ACTIVATED = "DEVICE_ACTIVATED",
}

/**
 * Решение по возврату:
 *
 * * `FAST_REFUND_MONEY` — вернуть покупателю деньги без возврата товара.
 *
 * * `REFUND_MONEY` — вернуть покупателю деньги за товар.
 *
 * * `REFUND_MONEY_INCLUDING_SHIPMENT` — вернуть покупателю деньги за товар и обратную пересылку.
 *
 * * `REPAIR` — отремонтировать товар.
 *
 * * `REPLACE` — заменить товар.
 *
 * * `SEND_TO_EXAMINATION` — взять товар на экспертизу.
 *
 * * `DECLINE_REFUND` — отказать в возврате.
 *
 * * `OTHER_DECISION` — другое решение.
 */
export enum ReturnRequestDecisionType {
  FAST_REFUND_MONEY = "FAST_REFUND_MONEY",
  REFUND_MONEY = "REFUND_MONEY",
  REFUND_MONEY_INCLUDING_SHIPMENT = "REFUND_MONEY_INCLUDING_SHIPMENT",
  REPAIR = "REPAIR",
  REPLACE = "REPLACE",
  SEND_TO_EXAMINATION = "SEND_TO_EXAMINATION",
  DECLINE_REFUND = "DECLINE_REFUND",
  OTHER_DECISION = "OTHER_DECISION",
}

/**
 * Логистический статус конкретного товара:
 *
 * * `CREATED` — возврат создан.
 *
 * * `RECEIVED` — возврат принят у отправителя.
 *
 * * `IN_TRANSIT` — возврат в пути.
 *
 * * `READY_FOR_PICKUP` — возврат готов к выдаче магазину.
 *
 * * `PICKED` — возврат выдан магазину.
 *
 * * `RECEIVED_ON_FULFILLMENT` — возврат принят на складе Маркета.
 *
 * * `CANCELLED` — возврат отменен.
 *
 * * `LOST` — возврат утерян.
 *
 * * `UTILIZED` — возврат утилизирован.
 *
 * * `PREPARED_FOR_UTILIZATION` — возврат готов к утилизации.
 *
 * * `EXPROPRIATED` — товары в возврате направлены на перепродажу.
 *
 * * `NOT_IN_DEMAND` — возврат не забрали с почты.
 */
export enum ReturnInstanceStatusType {
  CREATED = "CREATED",
  RECEIVED = "RECEIVED",
  IN_TRANSIT = "IN_TRANSIT",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED = "PICKED",
  RECEIVED_ON_FULFILLMENT = "RECEIVED_ON_FULFILLMENT",
  CANCELLED = "CANCELLED",
  LOST = "LOST",
  UTILIZED = "UTILIZED",
  PREPARED_FOR_UTILIZATION = "PREPARED_FOR_UTILIZATION",
  EXPROPRIATED = "EXPROPRIATED",
  NOT_IN_DEMAND = "NOT_IN_DEMAND",
}

/**
 * Тип остатка на складе:
 *
 * * `FIT` — годный.
 *
 * * `DEFECT` — бракованный.
 *
 * * `ANOMALY` — аномалия.
 *
 * * `SURPLUS` — лишний.
 *
 * * `EXPIRED` — просроченный.
 *
 * * `MISGRADING` — пересортица.
 *
 * * `UNDEFINED` — с неизвестным статусом.
 *
 * * `INCORRECT_IMEI` — товар с некорректным [:no-translate[IMEI]](https://ru.wikipedia.org/wiki/IMEI).
 *
 * * `INCORRECT_SERIAL_NUMBER` — товар с некорректным серийным номером.
 *
 * * `INCORRECT_CIS` — товар с некорректным кодом идентификации единицы товара в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) или [:no-translate[«ASL BELGISI»]](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]).
 *
 * * `PART_MISSING` — недостача.
 *
 * * `NON_COMPLIENT` — товар с множественными несоответствиями.
 *
 * * `NOT_ACCEPTABLE` — товар, который Маркет не принимает.
 *
 * * `SERVICE` — сервисный сток.
 *
 * * `MARKDOWN` — уценка.
 *
 * * `DEMO` — демо.
 *
 * * `REPAIR` — ремонт.
 *
 * * `FIRMWARE` — прошивка.
 *
 * * `UNKNOWN` — неизвестный тип товара.
 */
export enum ReturnInstanceStockType {
  FIT = "FIT",
  DEFECT = "DEFECT",
  ANOMALY = "ANOMALY",
  SURPLUS = "SURPLUS",
  EXPIRED = "EXPIRED",
  MISGRADING = "MISGRADING",
  UNDEFINED = "UNDEFINED",
  INCORRECT_IMEI = "INCORRECT_IMEI",
  INCORRECT_SERIAL_NUMBER = "INCORRECT_SERIAL_NUMBER",
  INCORRECT_CIS = "INCORRECT_CIS",
  PART_MISSING = "PART_MISSING",
  NON_COMPLIENT = "NON_COMPLIENT",
  NOT_ACCEPTABLE = "NOT_ACCEPTABLE",
  SERVICE = "SERVICE",
  MARKDOWN = "MARKDOWN",
  DEMO = "DEMO",
  REPAIR = "REPAIR",
  FIRMWARE = "FIRMWARE",
  UNKNOWN = "UNKNOWN",
}

/**
 * Решение по возврату:
 *
 * * `FAST_REFUND_MONEY` — вернуть покупателю деньги без возврата товара.
 *
 * * `REFUND_MONEY` — вернуть покупателю деньги за товар.
 *
 * * `REFUND_MONEY_INCLUDING_SHIPMENT` — вернуть покупателю деньги за товар и обратную пересылку.
 *
 * * `REPAIR` — отремонтировать товар.
 *
 * * `REPLACE` — заменить товар.
 *
 * * `SEND_TO_EXAMINATION` — взять товар на экспертизу.
 *
 * * `DECLINE_REFUND` — отказать в возврате.
 *
 * * `OTHER_DECISION` — другое решение.
 *
 * * `UNKNOWN` — не указано.
 */
export enum ReturnDecisionType {
  FAST_REFUND_MONEY = "FAST_REFUND_MONEY",
  REFUND_MONEY = "REFUND_MONEY",
  REFUND_MONEY_INCLUDING_SHIPMENT = "REFUND_MONEY_INCLUDING_SHIPMENT",
  REPAIR = "REPAIR",
  REPLACE = "REPLACE",
  SEND_TO_EXAMINATION = "SEND_TO_EXAMINATION",
  DECLINE_REFUND = "DECLINE_REFUND",
  OTHER_DECISION = "OTHER_DECISION",
  UNKNOWN = "UNKNOWN",
}

/**
 * Детали причин возврата:
 *   * `DOES_NOT_FIT`:
 *     * `USER_DID_NOT_LIKE` — товар не понравился.
 *     * `USER_CHANGED_MIND` — передумал покупать.
 *     * `DELIVERED_TOO_LONG` — передумал покупать из-за длительного срока доставки.
 *
 *   * `BAD_QUALITY`:
 *     * `BAD_PACKAGE` — заводская упаковка повреждена.
 *     * `DAMAGED` — царапины, сколы.
 *     * `NOT_WORKING` — не включается, не работает.
 *     * `INCOMPLETENESS` — некомплект (не хватает детали в наборе, к товару).
 *     * `WRAPPING_DAMAGED` — транспортная упаковка повреждена.
 *     * `ITEM_WAS_USED` — следы использования на товаре.
 *     * `BROKEN` — товар разбит.
 *     * `BAD_FLOWERS` — некачественные цветы.
 *
 *   * `WRONG_ITEM`:
 *     * `WRONG_ITEM` — не тот товар.
 *     * `WRONG_COLOR` — цвет не соответствует заявленному.
 *     * `DID_NOT_MATCH_DESCRIPTION` — описание или характеристики не соответствуют заявленным.
 *     * `WRONG_ORDER` — доставили чужой заказ.
 *     * `WRONG_AMOUNT_DELIVERED` — неверное количество товара.
 *     * `PARCEL_MISSING` — часть заказа отсутствует.
 *     * `INCOMPLETE` — заказ не привезли полностью.
 *
 *   * `UNKNOWN` — детали причины не указаны.
 */
export enum ReturnDecisionSubreasonType {
  USER_DID_NOT_LIKE = "USER_DID_NOT_LIKE",
  USER_CHANGED_MIND = "USER_CHANGED_MIND",
  DELIVERED_TOO_LONG = "DELIVERED_TOO_LONG",
  BAD_PACKAGE = "BAD_PACKAGE",
  DAMAGED = "DAMAGED",
  NOT_WORKING = "NOT_WORKING",
  INCOMPLETENESS = "INCOMPLETENESS",
  WRONG_ITEM = "WRONG_ITEM",
  WRONG_COLOR = "WRONG_COLOR",
  DID_NOT_MATCH_DESCRIPTION = "DID_NOT_MATCH_DESCRIPTION",
  WRONG_ORDER = "WRONG_ORDER",
  WRONG_AMOUNT_DELIVERED = "WRONG_AMOUNT_DELIVERED",
  WRAPPING_DAMAGED = "WRAPPING_DAMAGED",
  ITEM_WAS_USED = "ITEM_WAS_USED",
  BROKEN = "BROKEN",
  BAD_FLOWERS = "BAD_FLOWERS",
  PARCEL_MISSING = "PARCEL_MISSING",
  INCOMPLETE = "INCOMPLETE",
  UNKNOWN = "UNKNOWN",
}

/**
 * Причины возврата:
 *
 * * `BAD_QUALITY` — бракованный товар (есть недостатки).
 *
 * * `DOES_NOT_FIT` — товар не подошел.
 *
 * * `WRONG_ITEM` — привезли не тот товар.
 *
 * * `DAMAGE_DELIVERY` — товар поврежден при доставке.
 *
 * * `LOYALTY_FAIL` — невозможно установить виновного в браке/пересорте.
 *
 * * `CONTENT_FAIL` — ошибочное описание товара по вине Маркета.
 *
 * * `DELIVERY_FAIL` — товар не привезли.
 *
 * * `UNKNOWN` — причина не известна.
 */
export enum ReturnDecisionReasonType {
  BAD_QUALITY = "BAD_QUALITY",
  DOES_NOT_FIT = "DOES_NOT_FIT",
  WRONG_ITEM = "WRONG_ITEM",
  DAMAGE_DELIVERY = "DAMAGE_DELIVERY",
  LOYALTY_FAIL = "LOYALTY_FAIL",
  CONTENT_FAIL = "CONTENT_FAIL",
  DELIVERY_FAIL = "DELIVERY_FAIL",
  UNKNOWN = "UNKNOWN",
}

/**
 * Статус передачи возврата:
 *
 * * `CREATED` — возврат создан.
 *
 * * `RECEIVED` — принят у покупателя.
 *
 * * `IN_TRANSIT` — возврат в пути.
 *
 * * `READY_FOR_PICKUP` — возврат готов к выдаче магазину.
 *
 * * `PICKED` — возврат выдан магазину.
 *
 * * `LOST` — возврат утерян при транспортировке.
 *
 * * `EXPIRED` — покупатель не принес товар на возврат вовремя.
 *
 * * `CANCELLED` — возврат отменен.
 *
 * * `FULFILMENT_RECEIVED` — возврат принят на складе Маркета.
 *
 * * `PREPARED_FOR_UTILIZATION` — возврат передан в утилизацию.
 *
 * * `NOT_IN_DEMAND` — возврат не забрали с почты.
 *
 * * `UTILIZED` — возврат утилизирован.
 *
 * * `READY_FOR_EXPROPRIATION` — товары в возврате направлены на перепродажу.
 *
 * * `RECEIVED_FOR_EXPROPRIATION` — товары в возврате приняты для перепродажи.
 *
 * * `UNKNOWN` — неизвестный статус.
 */
export enum ReturnShipmentStatusType {
  CREATED = "CREATED",
  RECEIVED = "RECEIVED",
  IN_TRANSIT = "IN_TRANSIT",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED = "PICKED",
  LOST = "LOST",
  EXPIRED = "EXPIRED",
  CANCELLED = "CANCELLED",
  FULFILMENT_RECEIVED = "FULFILMENT_RECEIVED",
  PREPARED_FOR_UTILIZATION = "PREPARED_FOR_UTILIZATION",
  NOT_IN_DEMAND = "NOT_IN_DEMAND",
  UTILIZED = "UTILIZED",
  READY_FOR_EXPROPRIATION = "READY_FOR_EXPROPRIATION",
  RECEIVED_FOR_EXPROPRIATION = "RECEIVED_FOR_EXPROPRIATION",
  UNKNOWN = "UNKNOWN",
}

/**
 * Способ возврата товара покупателем:
 *
 * * `SHOP` — в точку возврата магазина.
 *
 * * `DELIVERY_SERVICE` — отправить курьером.
 *
 * * `POST` — почта.
 */
export enum RecipientType {
  SHOP = "SHOP",
  DELIVERY_SERVICE = "DELIVERY_SERVICE",
  POST = "POST",
}

/**
 * Тип логистической точки:
 *
 *   * `WAREHOUSE` — склад.
 *   * `PICKUP_POINT` — обычная точка выдачи заказов (ПВЗ).
 *   * `PICKUP_TERMINAL` — постамат.
 *   * `PICKUP_POST_OFFICE` — отделение почтовой связи (ОПС).
 *   * `PICKUP_MIXED` — торговый зал и пункт выдачи заказов.
 *   * `PICKUP_RETAIL` — торговый зал.
 */
export enum LogisticPointType {
  WAREHOUSE = "WAREHOUSE",
  PICKUP_POINT = "PICKUP_POINT",
  PICKUP_TERMINAL = "PICKUP_TERMINAL",
  PICKUP_POST_OFFICE = "PICKUP_POST_OFFICE",
  PICKUP_MIXED = "PICKUP_MIXED",
  PICKUP_RETAIL = "PICKUP_RETAIL",
}

/**
 * Тип заказа для фильтрации:
 *
 * * `UNREDEEMED` — невыкуп.
 *
 * * `RETURN` — возврат.
 *
 * Если не указывать, в ответе будут и невыкупы, и возвраты.
 */
export enum ReturnType {
  UNREDEEMED = "UNREDEEMED",
  RETURN = "RETURN",
}

/**
 * Статус возврата денег:
 *
 * * `STARTED_BY_USER` — создан клиентом из личного кабинета.
 *
 * * `REFUND_IN_PROGRESS` — ждет решение о возврате денег.
 *
 * * `REFUNDED` — деньги возвращены.
 *
 * * `FAILED` — невозможно провести возврат покупателю.
 *
 * * `WAITING_FOR_DECISION` — ожидает решения (:no-translate[DBS]).
 *
 * * `DECISION_MADE` — по возврату принято решение (:no-translate[DBS]).
 *
 * * `REFUNDED_WITH_BONUSES` — возврат осуществлен баллами Плюса или промокодом.
 *
 * * `REFUNDED_BY_SHOP` — магазин сделал самостоятельно возврат денег.
 *
 * * `COMPLETE_WITHOUT_REFUND` — возврат денег не требуется.
 *
 * * `CANCELLED` — возврат отменен.
 *
 * * `REJECTED` — возврат отклонен модерацией или в ПВЗ.
 *
 * * `PREMODERATION_DISPUTE` — по возврату открыт спор (:no-translate[FBS] и Экспресс).
 *
 * * `PREMODERATION_DECISION_WAITING` — ожидает решения (:no-translate[FBS] и Экспресс).
 *
 * * `PREMODERATION_DECISION_MADE` — по возврату принято решение (:no-translate[FBS] и Экспресс).
 *
 * * `PREMODERATION_SELECT_DELIVERY` — пользователь выбирает способ доставки (:no-translate[FBS] и Экспресс).
 *
 * * `UNKNOWN` — неизвестный статус.
 */
export enum RefundStatusType {
  STARTED_BY_USER = "STARTED_BY_USER",
  REFUND_IN_PROGRESS = "REFUND_IN_PROGRESS",
  REFUNDED = "REFUNDED",
  FAILED = "FAILED",
  WAITING_FOR_DECISION = "WAITING_FOR_DECISION",
  DECISION_MADE = "DECISION_MADE",
  REFUNDED_WITH_BONUSES = "REFUNDED_WITH_BONUSES",
  REFUNDED_BY_SHOP = "REFUNDED_BY_SHOP",
  CANCELLED = "CANCELLED",
  REJECTED = "REJECTED",
  COMPLETE_WITHOUT_REFUND = "COMPLETE_WITHOUT_REFUND",
  PREMODERATION_DISPUTE = "PREMODERATION_DISPUTE",
  PREMODERATION_DECISION_WAITING = "PREMODERATION_DECISION_WAITING",
  PREMODERATION_DECISION_MADE = "PREMODERATION_DECISION_MADE",
  PREMODERATION_SELECT_DELIVERY = "PREMODERATION_SELECT_DELIVERY",
  UNKNOWN = "UNKNOWN",
}

/**
 * Статус документа:
 *
 * * `READY` — готов.
 * * `NOT_READY` — не готов.
 */
export enum OrderDocumentStatusType {
  READY = "READY",
  NOT_READY = "NOT_READY",
}

/**
 * Размещение ярлыков на странице PDF-файла:
 *
 * * `A9_HORIZONTALLY` — ярлык размером 58 × 40 мм без полей, близок к формату :no-translate[A9].
 *
 *   {% cut "Пример ярлыка для продавцов Маркета" %}
 *
 *   ![Изображение горизонтального ярлыка формата :no-translate[A9] для продавцов Маркета](../../_images/labels/label-A9-horizontally.png)
 *
 *   {% endcut %}
 *
 *   {% cut "Пример ярлыка для продавцов Market Yandex Go" %}
 *
 *   ![Изображение горизонтального ярлыка формата A9 для продавцов Market Yandex Go](../../_images/labels/label-A9-horizontally-uz.png)
 *
 *   {% endcut %}
 *
 * * `A9` — ярлык размером 40 × 58 мм без полей, близок к формату A9.
 *
 *   {% cut "Пример ярлыка для продавцов Маркета" %}
 *
 *   ![Изображение вертикального ярлыка формата :no-translate[A9] для продавцов Маркета](../../_images/labels/label-A9.png)
 *
 *   {% endcut %}
 *
 *   {% cut "Пример ярлыка для продавцов Market Yandex Go" %}
 *
 *   ![Изображение вертикального ярлыка формата :no-translate[A9] для продавцов Market Yandex Go](../../_images/labels/label-A9-uz.png)
 *
 *   {% endcut %}
 *
 * * `A7` — ярлык размером 75 × 120 мм (80,4 × 125,6 мм с учетом полей), близок к формату :no-translate[A7].
 *
 *   {% cut "Пример ярлыка для продавцов Маркета" %}
 *
 *   ![Изображение ярлыка формата A7 для продавцов Маркета](../../_images/labels/label-A7.jpg)
 *
 *   {% endcut %}
 *
 *   {% cut "Пример ярлыка для продавцов Market Yandex Go" %}
 *
 *   ![Изображение ярлыка формата :no-translate[A7] для продавцов Market Yandex Go](../../_images/labels/label-A7-uz.png)
 *
 *   {% endcut %}
 *
 * * `A4` — на листе A4 располагается ярлык того формата, который выбран в кабинете продавца на Маркете — перейдите на страницу **Заказы** → **Заказы и отгрузки** → на вкладке нужной модели работы нажмите кнопку **Формат ярлыков**.
 */
export enum PageFormatType {
  A9_HORIZONTALLY = "A9_HORIZONTALLY",
  A9 = "A9",
  A7 = "A7",
  A4 = "A4",
}

/**
 * Статус проверки кода подтверждения:
 *
 * * `ACCEPTED` — код верный.
 * * `REJECTED` — код неверный.
 * * `NEED_UPDATE` — Маркет отправит новый код. Значение возвращается, если превышено количество попыток отправки кода.
 */
export enum EacVerificationStatusType {
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  NEED_UPDATE = "NEED_UPDATE",
}

/**
 * Причина переноса доставки заказа. Возможные причины изменения даты:
 *   - ```USER_MOVED_DELIVERY_DATES``` — покупатель попросил изменить дату или вы договорились привезти ему заказ раньше изначальной даты. Кроме этого указывается для подтверждения даты доставки товаров на заказ с долгой (31-60 дней) доставкой.
 *   - ```PARTNER_MOVED_DELIVERY_DATES``` — магазин не может доставить заказ в срок.
 */
export enum OrderDeliveryDateReasonType {
  USER_MOVED_DELIVERY_DATES = "USER_MOVED_DELIVERY_DATES",
  PARTNER_MOVED_DELIVERY_DATES = "PARTNER_MOVED_DELIVERY_DATES",
}

/**
 * Статус проверки УИНа:
 *
 * * `FAILED` — не прошел проверку.
 *
 * * `IN_PROGRESS` — в процессе проверки.
 *
 * * `NOT_ON_VALIDATION` — УИН не отправлен на проверку или переданы не все УИНы в заказе.
 *
 * * `OK` — проверка успешно пройдена.
 */
export enum UinStatusType {
  OK = "OK",
  IN_PROGRESS = "IN_PROGRESS",
  FAILED = "FAILED",
  NOT_ON_VALIDATION = "NOT_ON_VALIDATION",
}

/**
 * Варианты причин, по которым заказ не может быть отменен.
 *
 * * `ORDER_DELIVERED` — заказ уже доставлен.
 * * `ORDER_IN_DELIVERY` — заказ уже у курьера.
 */
export enum OrderCancellationReasonType {
  ORDER_DELIVERED = "ORDER_DELIVERED",
  ORDER_IN_DELIVERY = "ORDER_IN_DELIVERY",
}

/**
 * Изменился ли статус заказа:
 *
 * * `OK` — статус изменен.
 *
 * * `ERROR` — статус не изменен. В этом случае появится сообщение об ошибке в параметре `errorDetails`.
 */
export enum OrderUpdateStatusType {
  OK = "OK",
  ERROR = "ERROR",
}

/**
 * Причина, почему обновился состав заказа:
 *
 * * `PARTNER_REQUESTED_REMOVE` — магазин удалил товар.
 * * `USER_REQUESTED_REMOVE` — покупатель попросил удалить товар.
 */
export enum OrderItemsModificationRequestReasonType {
  PARTNER_REQUESTED_REMOVE = "PARTNER_REQUESTED_REMOVE",
  USER_REQUESTED_REMOVE = "USER_REQUESTED_REMOVE",
}

/**
 * Система налогообложения (СНО) магазина на момент оформления заказа:
 *
 * * `ECHN` — единый сельскохозяйственный налог (ЕСХН).
 *
 * * `ENVD` — единый налог на вмененный доход (ЕНВД).
 *
 * * `OSN` — общая система налогообложения (ОСН).
 *
 * * `PSN` — патентная система налогообложения (ПСН).
 *
 * * `USN` — упрощенная система налогообложения (УСН).
 *
 * * `USN_MINUS_COST` — упрощенная система налогообложения, доходы, уменьшенные на величину расходов (УСН «Доходы минус расходы»).
 *
 * * `NPD` — налог на профессиональный доход (НПД).
 *
 * * `UNKNOWN_VALUE` — неизвестное значение.
 * Используется только совместно с параметром `payment-method=YANDEX`.
 */
export enum OrderTaxSystemType {
  OSN = "OSN",
  USN = "USN",
  USN_MINUS_COST = "USN_MINUS_COST",
  ENVD = "ENVD",
  ECHN = "ECHN",
  PSN = "PSN",
  NPD = "NPD",
  UNKNOWN_VALUE = "UNKNOWN_VALUE",
}

/**
 * Тип покупателя:
 *
 * * `PERSON` — физическое лицо.
 *
 * * `BUSINESS` — организация.
 */
export enum OrderBuyerType {
  PERSON = "PERSON",
  BUSINESS = "BUSINESS",
}

/**
 * Тип кода подтверждения ЭАПП:
 *
 * * `MERCHANT_TO_COURIER` (временно не возвращается) — продавец передает код курьеру для получения невыкупа.
 *
 * * `COURIER_TO_MERCHANT` — курьер передает код продавцу для получения заказа.
 *
 * * `CHECKING_BY_MERCHANT` — продавец проверяет код на своей стороне.
 */
export enum OrderDeliveryEacType {
  MERCHANT_TO_COURIER = "MERCHANT_TO_COURIER",
  COURIER_TO_MERCHANT = "COURIER_TO_MERCHANT",
  CHECKING_BY_MERCHANT = "CHECKING_BY_MERCHANT",
}

/**
 * Способ отгрузки:
 *
 * * `BUYER` — доставка покупателю.
 *
 * * `MARKET_BRANDED_OUTLET` — доставка в пункт выдачи заказов Маркета.
 *
 * * `SHOP_OUTLET` — доставка в пункт выдачи заказов магазина.
 *
 * * `UNKNOWN` — неизвестный тип.
 */
export enum OrderDeliveryDispatchType {
  UNKNOWN = "UNKNOWN",
  BUYER = "BUYER",
  MARKET_BRANDED_OUTLET = "MARKET_BRANDED_OUTLET",
  SHOP_OUTLET = "SHOP_OUTLET",
}

/**
 * Тип подъема заказа на этаж:
 *
 * * `NOT_NEEDED` — не требуется.
 *
 * * `MANUAL` — ручной.
 *
 * * `ELEVATOR` — лифт.
 *
 * * `CARGO_ELEVATOR` — грузовой лифт.
 *
 * * `FREE` — любой из перечисленных выше, если включена опция бесплатного подъема.
 *
 * * `UNKNOWN` — неизвестный тип.
 */
export enum OrderLiftType {
  NOT_NEEDED = "NOT_NEEDED",
  MANUAL = "MANUAL",
  ELEVATOR = "ELEVATOR",
  CARGO_ELEVATOR = "CARGO_ELEVATOR",
  FREE = "FREE",
  UNKNOWN = "UNKNOWN",
}

/**
 * Тип сотрудничества со службой доставки в рамках конкретного заказа:
 *
 * * `SHOP` — магазин работает со службой доставки напрямую или доставляет заказы самостоятельно.
 *
 * * `YANDEX_MARKET` — магазин работает со службой доставки через Маркет.
 *
 * * `UNKNOWN` — неизвестный тип.
 */
export enum OrderDeliveryPartnerType {
  SHOP = "SHOP",
  YANDEX_MARKET = "YANDEX_MARKET",
  UNKNOWN = "UNKNOWN",
}

/**
 * Способ доставки заказа:
 *
 * * `DELIVERY` — курьерская доставка.
 *
 * * `PICKUP` — самовывоз.
 *
 * * `POST` — почта.
 *
 * * `DIGITAL` — для цифровых товаров.
 *
 * * `UNKNOWN` — неизвестный тип.
 */
export enum OrderDeliveryType {
  DELIVERY = "DELIVERY",
  PICKUP = "PICKUP",
  POST = "POST",
  DIGITAL = "DIGITAL",
  UNKNOWN = "UNKNOWN",
}

/**
 * Тип субсидии:
 *
 * * `YANDEX_CASHBACK` — скидка по подписке Яндекс Плюс.
 *
 * * `SUBSIDY` — скидка Маркета (по акциям, промокодам, купонам и т. д.)
 *
 * * `DELIVERY` — скидка за доставку (DBS).
 */
export enum OrderSubsidyType {
  YANDEX_CASHBACK = "YANDEX_CASHBACK",
  SUBSIDY = "SUBSIDY",
  DELIVERY = "DELIVERY",
}

/**
 * Признак товара:
 *
 * * `ULTIMA` — премиум-товар.
 * * `SAFE_TAG` — товар с [защитной меткой](*safe-tag).
 * * `TURBO` — товар, который быстро раскупают.
 */
export enum OrderItemTagType {
  ULTIMA = "ULTIMA",
  SAFE_TAG = "SAFE_TAG",
  TURBO = "TURBO",
}

/**
 * Вид маркировки товара:
 *
 * * `CIS` — КИЗ, идентификатор единицы товара в системе [«Честный ЗНАК»](https://честныйзнак.рф/) или [«ASL BELGISI»](https://aslbelgisi.uz) (для продавцов Market Yandex Go). Обязателен для заполнения.
 *
 * * `CIS_OPTIONAL` — КИЗ, идентификатор единицы товара в системе [«Честный ЗНАК»](https://честныйзнак.рф/). Необязателен для заполнения, но в ближайшее время потребуется его передача.
 *
 * * `UIN` — УИН, уникальный идентификационный номер.
 *
 * * `RNPT` — РНПТ, регистрационный номер партии товара.
 *
 * * `GTD` — номер ГТД, грузовой таможенной декларации.
 */
export enum OrderItemInstanceType {
  CIS = "CIS",
  CIS_OPTIONAL = "CIS_OPTIONAL",
  UIN = "UIN",
  RNPT = "RNPT",
  GTD = "GTD",
}

/**
 * Тип субсидии:
 *
 * * `YANDEX_CASHBACK` — скидка по подписке Яндекс Плюс.
 *
 * * `SUBSIDY` — скидка Маркета (по акциям, промокодам, купонам и т. д.).
 */
export enum OrderItemSubsidyType {
  YANDEX_CASHBACK = "YANDEX_CASHBACK",
  SUBSIDY = "SUBSIDY",
}

/**
 * Невыкупленный или возвращенный товар:
 *
 * * `REJECTED` — невыкупленный.
 *
 * * `RETURNED` — возвращенный.
 */
export enum OrderItemStatusType {
  REJECTED = "REJECTED",
  RETURNED = "RETURNED",
}

/**
 * Тип скидки:
 *
 * * `DIRECT_DISCOUNT` — прямая скидка, которую устанавливает продавец или Маркет.
 *
 * * `BLUE_SET` — комплекты.
 *
 * * `BLUE_FLASH` — флеш-акция.
 *
 * * `MARKET_COUPON` — скидка по промокоду Маркета.
 *
 * * `MARKET_PROMOCODE` — скидка по промокоду магазина.
 *
 * * `MARKET_BLUE` — скидка на Маркете.
 *
 * * `CHEAPEST_AS_GIFT` — самый дешевый товар в подарок.
 *
 * * `CASHBACK` — кешбэк.
 *
 * * `SPREAD_DISCOUNT_COUNT` — скидка за количество одинаковых товаров.
 *
 * * `SPREAD_DISCOUNT_RECEIPT` — скидка от суммы чека.
 *
 * * `DISCOUNT_BY_PAYMENT_TYPE` — прямая скидка при оплате картой Плюса.
 *
 * * `PERCENT_DISCOUNT` — прямая скидка в процентах.
 *
 * * `DCO_EXTRA_DISCOUNT` — дополнительная скидка, необходимая для расчета субсидии от Маркета.
 *
 * * `UNKNOWN` — неизвестный тип.
 *
 * Устаревшие типы:
 *
 * * `GENERIC_BUNDLE`.
 *
 * * `MARKET_COIN`.
 *
 * * `PRICE_DROP_AS_YOU_SHOP`.
 *
 * * `SECRET_SALE`.
 */
export enum OrderPromoType {
  DIRECT_DISCOUNT = "DIRECT_DISCOUNT",
  BLUE_SET = "BLUE_SET",
  BLUE_FLASH = "BLUE_FLASH",
  GENERIC_BUNDLE = "GENERIC_BUNDLE",
  MARKET_COUPON = "MARKET_COUPON",
  MARKET_PROMOCODE = "MARKET_PROMOCODE",
  MARKET_BLUE = "MARKET_BLUE",
  MARKET_COIN = "MARKET_COIN",
  PRICE_DROP_AS_YOU_SHOP = "PRICE_DROP_AS_YOU_SHOP",
  SECRET_SALE = "SECRET_SALE",
  CHEAPEST_AS_GIFT = "CHEAPEST_AS_GIFT",
  CASHBACK = "CASHBACK",
  SPREAD_DISCOUNT_COUNT = "SPREAD_DISCOUNT_COUNT",
  SPREAD_DISCOUNT_RECEIPT = "SPREAD_DISCOUNT_RECEIPT",
  DISCOUNT_BY_PAYMENT_TYPE = "DISCOUNT_BY_PAYMENT_TYPE",
  PERCENT_DISCOUNT = "PERCENT_DISCOUNT",
  DCO_EXTRA_DISCOUNT = "DCO_EXTRA_DISCOUNT",
  UNKNOWN = "UNKNOWN",
}

/**
 * Налог на добавленную стоимость (НДС) на товар:
 *
 * * `NO_VAT` — НДС не облагается, используется только для отдельных видов услуг.
 *
 * * `VAT_0` — НДС 0%. Например, используется при продаже товаров, вывезенных в таможенной процедуре экспорта, или при оказании услуг по международной перевозке товаров.
 *
 * * `VAT_10` — НДС 10%. Например, используется при реализации отдельных продовольственных и медицинских товаров.
 *
 * * `VAT_10_110` — НДС 10/110. НДС 10%, применяется только при предоплате.
 *
 * * `VAT_20` — НДС 20%. Основной НДС с 2019 года.
 *
 * * `VAT_20_120` — НДС 20/120. НДС 20%, применяется только при предоплате.
 *
 * * `VAT_18` — НДС 18%. Основной НДС до 2019 года.
 *
 * * `VAT_18_118` — НДС 18/118. НДС использовался до 1 января 2019 года при предоплате.
 *
 * * `VAT_12` — НДС 12%. Используется только в Узбекистане.
 *
 * * `VAT_05` — НДС 5%. НДС для упрощенной системы налогообложения (УСН).
 *
 * * `VAT_07` — НДС 7%. НДС для упрощенной системы налогообложения (УСН).
 *
 * * `UNKNOWN_VALUE` — неизвестный тип.
 *
 * Используется только совместно с параметром `payment-method=YANDEX`.
 */
export enum OrderVatType {
  NO_VAT = "NO_VAT",
  VAT_0 = "VAT_0",
  VAT_10 = "VAT_10",
  VAT_10_110 = "VAT_10_110",
  VAT_20 = "VAT_20",
  VAT_20_120 = "VAT_20_120",
  VAT_18 = "VAT_18",
  VAT_18_118 = "VAT_18_118",
  VAT_12 = "VAT_12",
  VAT_05 = "VAT_05",
  VAT_07 = "VAT_07",
  UNKNOWN_VALUE = "UNKNOWN_VALUE",
}

/**
 * Способ оплаты заказа:
 *
 * * Значения, если выбрана оплата при оформлении заказа (`"paymentType": "PREPAID"`):
 *
 *   * `YANDEX` — банковской картой.
 *
 *   * `APPLE_PAY` — Apple Pay.
 *
 *   * `GOOGLE_PAY` — Google Pay.
 *
 *   * `CREDIT` — в кредит.
 *
 *   * `TINKOFF_CREDIT` — в кредит в Тинькофф Банке.
 *
 *   * `TINKOFF_INSTALLMENTS` — рассрочка в Тинькофф Банке.
 *
 *   * `EXTERNAL_CERTIFICATE` — подарочным сертификатом (например, из приложения «Сбербанк Онлайн»).
 *
 *   * `SBP` — через систему быстрых платежей.
 *
 *   * `B2B_ACCOUNT_PREPAYMENT` — заказ оплачивает организация.
 *
 *
 * * Значения, если выбрана оплата при получении заказа (`"paymentType": "POSTPAID"`):
 *
 *   * `CARD_ON_DELIVERY` — банковской картой.
 *
 *   * `BOUND_CARD_ON_DELIVERY` — привязанной картой при получении.
 *
 *   * `BNPL_BANK_ON_DELIVERY` — супер Сплитом.
 *
 *   * `BNPL_ON_DELIVERY` — Сплитом.
 *
 *   * `CASH_ON_DELIVERY` — наличными.
 *
 *   * `B2B_ACCOUNT_POSTPAYMENT` — заказ оплачивает организация после доставки.
 *
 * * `UNKNOWN` — неизвестный тип.
 *
 * Значение по умолчанию: `CASH_ON_DELIVERY`.
 */
export enum OrderPaymentMethodType {
  CASH_ON_DELIVERY = "CASH_ON_DELIVERY",
  CARD_ON_DELIVERY = "CARD_ON_DELIVERY",
  BOUND_CARD_ON_DELIVERY = "BOUND_CARD_ON_DELIVERY",
  BNPL_BANK_ON_DELIVERY = "BNPL_BANK_ON_DELIVERY",
  BNPL_ON_DELIVERY = "BNPL_ON_DELIVERY",
  YANDEX = "YANDEX",
  APPLE_PAY = "APPLE_PAY",
  EXTERNAL_CERTIFICATE = "EXTERNAL_CERTIFICATE",
  CREDIT = "CREDIT",
  GOOGLE_PAY = "GOOGLE_PAY",
  TINKOFF_CREDIT = "TINKOFF_CREDIT",
  SBP = "SBP",
  TINKOFF_INSTALLMENTS = "TINKOFF_INSTALLMENTS",
  B2B_ACCOUNT_PREPAYMENT = "B2B_ACCOUNT_PREPAYMENT",
  B2B_ACCOUNT_POSTPAYMENT = "B2B_ACCOUNT_POSTPAYMENT",
  UNKNOWN = "UNKNOWN",
}

/**
 * Тип оплаты заказа:
 *
 * * `PREPAID` — оплата при оформлении заказа.
 *
 * * `POSTPAID` — оплата при получении заказа.
 *
 * * `UNKNOWN` — неизвестный тип.
 *
 * Если параметр отсутствует, заказ будет оплачен при получении.
 */
export enum OrderPaymentType {
  PREPAID = "PREPAID",
  POSTPAID = "POSTPAID",
  UNKNOWN = "UNKNOWN",
}

/**
 * Этап обработки заказа (если он имеет статус `PROCESSING`) или причина отмены заказа (если он имеет статус `CANCELLED`).
 *
 * * Значения для заказа в статусе `PROCESSING`:
 *
 *     * `STARTED` — заказ подтвержден, его можно начать обрабатывать.
 *
 *     * `READY_TO_SHIP` — заказ собран и готов к отправке.
 *
 * * Значения для заказа в статусе `CANCELLED`:
 *
 *     * `RESERVATION_EXPIRED` — покупатель не завершил оформление зарезервированного заказа в течение 10 минут.
 *
 *     * `USER_NOT_PAID` — покупатель не оплатил заказ (для типа оплаты `PREPAID`) в течение 30 минут.
 *
 *     * `USER_UNREACHABLE` — не удалось связаться с покупателем. Для отмены с этой причиной необходимо выполнить условия:
 *
 *       * не менее 3 звонков с 8 до 21 в часовом поясе покупателя;
 *       * перерыв между первым и третьим звонком не менее 90 минут;
 *       * соединение не короче 5 секунд.
 *
 *       Если хотя бы одно из этих условий не выполнено (кроме случая, когда номер недоступен), отменить заказ не получится. Вернется ответ с кодом ошибки 400.
 *
 *     * `USER_CHANGED_MIND` — покупатель отменил заказ по личным причинам.
 *
 *     * `USER_REFUSED_DELIVERY` — покупателя не устроили условия доставки.
 *
 *     * `USER_REFUSED_PRODUCT` — покупателю не подошел товар.
 *
 *     * `SHOP_FAILED` — магазин не может выполнить заказ.
 *
 *     * `USER_REFUSED_QUALITY` — покупателя не устроило качество товара.
 *
 *     * `REPLACING_ORDER` — покупатель решил заменить товар другим по собственной инициативе.
 *
 *     * `PROCESSING_EXPIRED` — значение более не используется.
 *
 *     * `PICKUP_EXPIRED` — закончился срок хранения заказа в ПВЗ.
 *
 *     * `TOO_MANY_DELIVERY_DATE_CHANGES` — заказ переносили слишком много раз.
 *
 *     * `TOO_LONG_DELIVERY` — заказ доставляется слишком долго.
 *
 *
 * * `TECHNICAL_ERROR` — техническая ошибка на стороне Маркета. Обратитесь в поддержку.
 *
 * Также могут возвращаться другие значения. Обрабатывать их не требуется.
 */
export enum OrderSubstatusType {
  RESERVATION_EXPIRED = "RESERVATION_EXPIRED",
  USER_NOT_PAID = "USER_NOT_PAID",
  USER_UNREACHABLE = "USER_UNREACHABLE",
  USER_CHANGED_MIND = "USER_CHANGED_MIND",
  USER_REFUSED_DELIVERY = "USER_REFUSED_DELIVERY",
  USER_REFUSED_PRODUCT = "USER_REFUSED_PRODUCT",
  SHOP_FAILED = "SHOP_FAILED",
  USER_REFUSED_QUALITY = "USER_REFUSED_QUALITY",
  REPLACING_ORDER = "REPLACING_ORDER",
  PROCESSING_EXPIRED = "PROCESSING_EXPIRED",
  PENDING_EXPIRED = "PENDING_EXPIRED",
  SHOP_PENDING_CANCELLED = "SHOP_PENDING_CANCELLED",
  PENDING_CANCELLED = "PENDING_CANCELLED",
  USER_FRAUD = "USER_FRAUD",
  RESERVATION_FAILED = "RESERVATION_FAILED",
  USER_PLACED_OTHER_ORDER = "USER_PLACED_OTHER_ORDER",
  USER_BOUGHT_CHEAPER = "USER_BOUGHT_CHEAPER",
  MISSING_ITEM = "MISSING_ITEM",
  BROKEN_ITEM = "BROKEN_ITEM",
  WRONG_ITEM = "WRONG_ITEM",
  PICKUP_EXPIRED = "PICKUP_EXPIRED",
  DELIVERY_PROBLEMS = "DELIVERY_PROBLEMS",
  LATE_CONTACT = "LATE_CONTACT",
  CUSTOM = "CUSTOM",
  DELIVERY_SERVICE_FAILED = "DELIVERY_SERVICE_FAILED",
  WAREHOUSE_FAILED_TO_SHIP = "WAREHOUSE_FAILED_TO_SHIP",
  DELIVERY_SERVICE_UNDELIVERED = "DELIVERY_SERVICE_UNDELIVERED",
  PREORDER = "PREORDER",
  AWAIT_CONFIRMATION = "AWAIT_CONFIRMATION",
  STARTED = "STARTED",
  PACKAGING = "PACKAGING",
  READY_TO_SHIP = "READY_TO_SHIP",
  SHIPPED = "SHIPPED",
  ASYNC_PROCESSING = "ASYNC_PROCESSING",
  WAITING_USER_INPUT = "WAITING_USER_INPUT",
  WAITING_BANK_DECISION = "WAITING_BANK_DECISION",
  BANK_REJECT_CREDIT_OFFER = "BANK_REJECT_CREDIT_OFFER",
  CUSTOMER_REJECT_CREDIT_OFFER = "CUSTOMER_REJECT_CREDIT_OFFER",
  CREDIT_OFFER_FAILED = "CREDIT_OFFER_FAILED",
  AWAIT_DELIVERY_DATES_CONFIRMATION = "AWAIT_DELIVERY_DATES_CONFIRMATION",
  SERVICE_FAULT = "SERVICE_FAULT",
  DELIVERY_SERVICE_RECEIVED = "DELIVERY_SERVICE_RECEIVED",
  USER_RECEIVED = "USER_RECEIVED",
  WAITING_FOR_STOCKS = "WAITING_FOR_STOCKS",
  AS_PART_OF_MULTI_ORDER = "AS_PART_OF_MULTI_ORDER",
  READY_FOR_LAST_MILE = "READY_FOR_LAST_MILE",
  LAST_MILE_STARTED = "LAST_MILE_STARTED",
  ANTIFRAUD = "ANTIFRAUD",
  DELIVERY_USER_NOT_RECEIVED = "DELIVERY_USER_NOT_RECEIVED",
  DELIVERY_SERVICE_DELIVERED = "DELIVERY_SERVICE_DELIVERED",
  DELIVERED_USER_NOT_RECEIVED = "DELIVERED_USER_NOT_RECEIVED",
  USER_WANTED_ANOTHER_PAYMENT_METHOD = "USER_WANTED_ANOTHER_PAYMENT_METHOD",
  USER_RECEIVED_TECHNICAL_ERROR = "USER_RECEIVED_TECHNICAL_ERROR",
  USER_FORGOT_TO_USE_BONUS = "USER_FORGOT_TO_USE_BONUS",
  DELIVERY_SERVICE_NOT_RECEIVED = "DELIVERY_SERVICE_NOT_RECEIVED",
  DELIVERY_SERVICE_LOST = "DELIVERY_SERVICE_LOST",
  SHIPPED_TO_WRONG_DELIVERY_SERVICE = "SHIPPED_TO_WRONG_DELIVERY_SERVICE",
  DELIVERED_USER_RECEIVED = "DELIVERED_USER_RECEIVED",
  WAITING_TINKOFF_DECISION = "WAITING_TINKOFF_DECISION",
  COURIER_SEARCH = "COURIER_SEARCH",
  COURIER_FOUND = "COURIER_FOUND",
  COURIER_IN_TRANSIT_TO_SENDER = "COURIER_IN_TRANSIT_TO_SENDER",
  COURIER_ARRIVED_TO_SENDER = "COURIER_ARRIVED_TO_SENDER",
  COURIER_RECEIVED = "COURIER_RECEIVED",
  COURIER_NOT_FOUND = "COURIER_NOT_FOUND",
  COURIER_NOT_DELIVER_ORDER = "COURIER_NOT_DELIVER_ORDER",
  COURIER_RETURNS_ORDER = "COURIER_RETURNS_ORDER",
  COURIER_RETURNED_ORDER = "COURIER_RETURNED_ORDER",
  WAITING_USER_DELIVERY_INPUT = "WAITING_USER_DELIVERY_INPUT",
  PICKUP_SERVICE_RECEIVED = "PICKUP_SERVICE_RECEIVED",
  PICKUP_USER_RECEIVED = "PICKUP_USER_RECEIVED",
  CANCELLED_COURIER_NOT_FOUND = "CANCELLED_COURIER_NOT_FOUND",
  COURIER_NOT_COME_FOR_ORDER = "COURIER_NOT_COME_FOR_ORDER",
  DELIVERY_NOT_MANAGED_REGION = "DELIVERY_NOT_MANAGED_REGION",
  INCOMPLETE_CONTACT_INFORMATION = "INCOMPLETE_CONTACT_INFORMATION",
  INCOMPLETE_MULTI_ORDER = "INCOMPLETE_MULTI_ORDER",
  INAPPROPRIATE_WEIGHT_SIZE = "INAPPROPRIATE_WEIGHT_SIZE",
  TECHNICAL_ERROR = "TECHNICAL_ERROR",
  SORTING_CENTER_LOST = "SORTING_CENTER_LOST",
  COURIER_SEARCH_NOT_STARTED = "COURIER_SEARCH_NOT_STARTED",
  LOST = "LOST",
  AWAIT_PAYMENT = "AWAIT_PAYMENT",
  AWAIT_LAVKA_RESERVATION = "AWAIT_LAVKA_RESERVATION",
  USER_WANTS_TO_CHANGE_ADDRESS = "USER_WANTS_TO_CHANGE_ADDRESS",
  FULL_NOT_RANSOM = "FULL_NOT_RANSOM",
  PRESCRIPTION_MISMATCH = "PRESCRIPTION_MISMATCH",
  DROPOFF_LOST = "DROPOFF_LOST",
  DROPOFF_CLOSED = "DROPOFF_CLOSED",
  DELIVERY_TO_STORE_STARTED = "DELIVERY_TO_STORE_STARTED",
  USER_WANTS_TO_CHANGE_DELIVERY_DATE = "USER_WANTS_TO_CHANGE_DELIVERY_DATE",
  WRONG_ITEM_DELIVERED = "WRONG_ITEM_DELIVERED",
  DAMAGED_BOX = "DAMAGED_BOX",
  AWAIT_DELIVERY_DATES = "AWAIT_DELIVERY_DATES",
  LAST_MILE_COURIER_SEARCH = "LAST_MILE_COURIER_SEARCH",
  PICKUP_POINT_CLOSED = "PICKUP_POINT_CLOSED",
  LEGAL_INFO_CHANGED = "LEGAL_INFO_CHANGED",
  USER_HAS_NO_TIME_TO_PICKUP_ORDER = "USER_HAS_NO_TIME_TO_PICKUP_ORDER",
  DELIVERY_CUSTOMS_ARRIVED = "DELIVERY_CUSTOMS_ARRIVED",
  DELIVERY_CUSTOMS_CLEARED = "DELIVERY_CUSTOMS_CLEARED",
  FIRST_MILE_DELIVERY_SERVICE_RECEIVED = "FIRST_MILE_DELIVERY_SERVICE_RECEIVED",
  AWAIT_AUTO_DELIVERY_DATES = "AWAIT_AUTO_DELIVERY_DATES",
  AWAIT_USER_PERSONAL_DATA = "AWAIT_USER_PERSONAL_DATA",
  NO_PERSONAL_DATA_EXPIRED = "NO_PERSONAL_DATA_EXPIRED",
  CUSTOMS_PROBLEMS = "CUSTOMS_PROBLEMS",
  AWAIT_CASHIER = "AWAIT_CASHIER",
  WAITING_POSTPAID_BUDGET_RESERVATION = "WAITING_POSTPAID_BUDGET_RESERVATION",
  AWAIT_SERVICEABLE_CONFIRMATION = "AWAIT_SERVICEABLE_CONFIRMATION",
  POSTPAID_BUDGET_RESERVATION_FAILED = "POSTPAID_BUDGET_RESERVATION_FAILED",
  AWAIT_CUSTOM_PRICE_CONFIRMATION = "AWAIT_CUSTOM_PRICE_CONFIRMATION",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  TOO_MANY_DELIVERY_DATE_CHANGES = "TOO_MANY_DELIVERY_DATE_CHANGES",
  TOO_LONG_DELIVERY = "TOO_LONG_DELIVERY",
  DEFERRED_PAYMENT = "DEFERRED_PAYMENT",
  POSTPAID_FAILED = "POSTPAID_FAILED",
  UNKNOWN = "UNKNOWN",
}

/**
 * Статус заказа:
 *
 * * `PLACING` — оформляется, подготовка к резервированию.
 *
 * * `RESERVED` — зарезервирован, но недооформлен.
 *
 * * `UNPAID` — оформлен, но еще не оплачен (если выбрана оплата при оформлении).
 *
 * * `PROCESSING` — находится в обработке.
 *
 * * `DELIVERY` — передан в службу доставки.
 *
 * * `PICKUP` — доставлен в пункт самовывоза.
 *
 * * `DELIVERED` — получен покупателем.
 *
 * * `CANCELLED` — отменен.
 *
 * * `PENDING` — ожидает обработки со стороны продавца.
 *
 * * `PARTIALLY_RETURNED` — возвращен частично.
 *
 * * `RETURNED` — возвращен полностью.
 *
 * * `UNKNOWN` — неизвестный статус.
 *
 * Также могут возвращаться другие значения. Обрабатывать их не требуется.
 */
export enum OrderStatusType {
  PLACING = "PLACING",
  RESERVED = "RESERVED",
  UNPAID = "UNPAID",
  PROCESSING = "PROCESSING",
  DELIVERY = "DELIVERY",
  PICKUP = "PICKUP",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  PENDING = "PENDING",
  PARTIALLY_RETURNED = "PARTIALLY_RETURNED",
  RETURNED = "RETURNED",
  UNKNOWN = "UNKNOWN",
}

/**
 * Источник информации о расписании работы службы доставки.
 * Возможные значения:
 * * `WEB` — информация получена из настроек кабинета продавца на Маркете.
 * * `YML` — информация получена из прайс-листа магазина.
 */
export enum CampaignSettingsScheduleSourceType {
  WEB = "WEB",
  YML = "YML",
}

/**
 * Тип региона.
 *
 * Возможные значения:
 *
 * * `CITY_DISTRICT` — район города.
 *
 * * `CITY` — крупный город.
 *
 * * `CONTINENT` — континент.
 *
 * * `COUNTRY_DISTRICT` — область.
 *
 * * `COUNTRY` — страна.
 *
 * * `REGION` — регион.
 *
 * * `REPUBLIC_AREA` — район субъекта федерации.
 *
 * * `REPUBLIC` — субъект федерации.
 *
 * * `SUBWAY_STATION` — станция метро.
 *
 * * `VILLAGE` — город.
 *
 * * `OTHER` — неизвестный регион.
 */
export enum RegionType {
  OTHER = "OTHER",
  CONTINENT = "CONTINENT",
  REGION = "REGION",
  COUNTRY = "COUNTRY",
  COUNTRY_DISTRICT = "COUNTRY_DISTRICT",
  REPUBLIC = "REPUBLIC",
  CITY = "CITY",
  VILLAGE = "VILLAGE",
  CITY_DISTRICT = "CITY_DISTRICT",
  SUBWAY_STATION = "SUBWAY_STATION",
  REPUBLIC_AREA = "REPUBLIC_AREA",
}

/**
 * Модель, по которой работает магазин:
 *
 * * `FBS` — FBS или Экспресс.
 * * `FBY` — FBY.
 * * `DBS` — DBS.
 */
export enum PlacementType {
  FBS = "FBS",
  FBY = "FBY",
  DBS = "DBS",
}

/**
 * Коды валют:
 *
 * * `RUR` — российский рубль.
 * * `UAH` — украинская гривна.
 * * `BYR` — белорусский рубль.
 * * `KZT` — казахстанский тенге.
 * * `UZS` — узбекский сум.
 */
export enum CurrencyType {
  RUR = "RUR",
  USD = "USD",
  EUR = "EUR",
  UAH = "UAH",
  AUD = "AUD",
  GBP = "GBP",
  BYR = "BYR",
  BYN = "BYN",
  DKK = "DKK",
  ISK = "ISK",
  KZT = "KZT",
  CAD = "CAD",
  CNY = "CNY",
  NOK = "NOK",
  XDR = "XDR",
  SGD = "SGD",
  TRY = "TRY",
  SEK = "SEK",
  CHF = "CHF",
  JPY = "JPY",
  AZN = "AZN",
  ALL = "ALL",
  DZD = "DZD",
  AOA = "AOA",
  ARS = "ARS",
  AMD = "AMD",
  AFN = "AFN",
  BHD = "BHD",
  BGN = "BGN",
  BOB = "BOB",
  BWP = "BWP",
  BND = "BND",
  BRL = "BRL",
  BIF = "BIF",
  HUF = "HUF",
  VEF = "VEF",
  KPW = "KPW",
  VND = "VND",
  GMD = "GMD",
  GHS = "GHS",
  GNF = "GNF",
  HKD = "HKD",
  GEL = "GEL",
  AED = "AED",
  EGP = "EGP",
  ZMK = "ZMK",
  ILS = "ILS",
  INR = "INR",
  IDR = "IDR",
  JOD = "JOD",
  IQD = "IQD",
  IRR = "IRR",
  YER = "YER",
  QAR = "QAR",
  KES = "KES",
  KGS = "KGS",
  COP = "COP",
  CDF = "CDF",
  CRC = "CRC",
  KWD = "KWD",
  CUP = "CUP",
  LAK = "LAK",
  LVL = "LVL",
  SLL = "SLL",
  LBP = "LBP",
  LYD = "LYD",
  SZL = "SZL",
  LTL = "LTL",
  MUR = "MUR",
  MRO = "MRO",
  MKD = "MKD",
  MWK = "MWK",
  MGA = "MGA",
  MYR = "MYR",
  MAD = "MAD",
  MXN = "MXN",
  MZN = "MZN",
  MDL = "MDL",
  MNT = "MNT",
  NPR = "NPR",
  NGN = "NGN",
  NIO = "NIO",
  NZD = "NZD",
  OMR = "OMR",
  PKR = "PKR",
  PYG = "PYG",
  PEN = "PEN",
  PLN = "PLN",
  KHR = "KHR",
  SAR = "SAR",
  RON = "RON",
  SCR = "SCR",
  SYP = "SYP",
  SKK = "SKK",
  SOS = "SOS",
  SDG = "SDG",
  SRD = "SRD",
  TJS = "TJS",
  THB = "THB",
  TWD = "TWD",
  BDT = "BDT",
  TZS = "TZS",
  TND = "TND",
  TMM = "TMM",
  UGX = "UGX",
  UZS = "UZS",
  UYU = "UYU",
  PHP = "PHP",
  DJF = "DJF",
  XAF = "XAF",
  XOF = "XOF",
  HRK = "HRK",
  CZK = "CZK",
  CLP = "CLP",
  LKR = "LKR",
  EEK = "EEK",
  ETB = "ETB",
  RSD = "RSD",
  ZAR = "ZAR",
  KRW = "KRW",
  NAD = "NAD",
  TL = "TL",
  UE = "UE",
}

/**
 * Тип ответа.
 * Возможные значения:
 * * `OK` — ошибок нет.
 * * `ERROR` — при обработке запроса произошла ошибка.
 */
export enum ApiResponseStatusType {
  OK = "OK",
  ERROR = "ERROR",
}

/** Стандартная обертка для ответов сервера. */
export interface ApiResponse {
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  status?: ApiResponseStatusType;
}

/** Информация о кабинете. */
export interface BusinessDTO {
  /**
   * Идентификатор кабинета.
   * @format int64
   */
  id?: number;
  /** Название бизнеса. */
  name?: string;
}

/** Настройки кабинета. */
export interface BusinessSettingsDTO {
  /**
   * Управление ценами на товары:
   *
   * * `false` — можно установить цену, которая действует:
   *   * во всех магазинах кабинета — [POST businesses/{businessId}/offer-prices/updates](../../reference/business-assortment/updateBusinessPrices.md);
   *   * в конкретном магазине — [POST campaigns/{campaignId}/offer-prices/updates](../../reference/assortment/updatePrices.md).
   * * `true` — можно установить только цену, которая действует во всех магазинах кабинета, — [POST businesses/{businessId}/offer-prices/updates](../../reference/business-assortment/updateBusinessPrices.md).
   */
  onlyDefaultPrice?: boolean;
  /** Валюта [в кабинете продавца на Маркете](https://partner.market.yandex.ru/). */
  currency?: CurrencyType;
}

/** Информация о кабинете и его настройках. */
export interface GetBusinessSettingsInfoDTO {
  /** Базовая информация о кабинете. */
  info?: BusinessDTO;
  /** Настройки на уровне кабинета. */
  settings?: BusinessSettingsDTO;
}

/** Ответ на запрос настроек кабинета. */
export type GetBusinessSettingsResponse = ApiResponse & {
  /** Информация о кабинете и его настройках. */
  result?: GetBusinessSettingsInfoDTO;
};

/** Общий формат ошибки. */
export interface ApiErrorDTO {
  /** Код ошибки. */
  code: string;
  /** Описание ошибки. */
  message?: string;
}

/** Стандартная обертка для ошибок сервера. */
export type ApiErrorResponse = ApiResponse & {
  /**
   * Список ошибок.
   * @minItems 1
   */
  errors?: ApiErrorDTO[] | null;
};

/** Ошибка в данных переданных от клиента. */
export type ApiClientDataErrorResponse = ApiErrorResponse;

/** В запросе не указаны авторизационные данные. */
export type ApiUnauthorizedErrorResponse = ApiErrorResponse;

/** Неверны авторизационные данные, указанные в запросе, или запрещен доступ к запрашиваемому ресурсу. */
export type ApiForbiddenErrorResponse = ApiErrorResponse;

/** Запрашиваемый ресурс не найден. */
export type ApiNotFoundErrorResponse = ApiErrorResponse;

/** Превышено ограничение на доступ к ресурсу. */
export type ApiLimitErrorResponse = ApiErrorResponse;

/** Внутренняя ошибка сервера. */
export type ApiServerErrorResponse = ApiErrorResponse;

/** Информация о магазине. */
export interface CampaignDTO {
  /** Название магазина. */
  domain?: string;
  /**
   * Идентификатор кампании.
   *
   * Его также можно найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   */
  id?: number;
  /**
   * Идентификатор плательщика в Яндекс Балансе.
   * @deprecated
   * @format int64
   */
  clientId?: number;
  /** Информация о кабинете. */
  business?: BusinessDTO;
  /**
   * Модель, по которой работает магазин:
   *
   * * `FBS` — FBS или Экспресс.
   * * `FBY` — FBY.
   * * `DBS` — DBS.
   */
  placementType?: PlacementType;
}

/** Модель для пагинации. */
export interface FlippingPagerDTO {
  /**
   * Сколько всего найдено элементов.
   * @format int32
   */
  total?: number;
  /**
   * Начальный номер найденного элемента на странице.
   * @format int32
   */
  from?: number;
  /**
   * Конечный номер найденного элемента на странице.
   * @format int32
   */
  to?: number;
  /**
   * Текущая страница.
   * @format int32
   */
  currentPage?: number;
  /**
   * Общее количество страниц.
   * @format int32
   */
  pagesCount?: number;
  /**
   * Размер страницы.
   * @format int32
   */
  pageSize?: number;
}

/** Результаты поиска магазинов. */
export interface GetCampaignsResponse {
  /** Список с информацией по каждому магазину. */
  campaigns: CampaignDTO[];
  /** Модель для пагинации. */
  pager?: FlippingPagerDTO;
}

/** Информация о магазине к данным идентификатора кампании. */
export interface GetCampaignResponse {
  /** Информация о магазине. */
  campaign?: CampaignDTO;
}

/**
 * Формат даты: `ДД-ММ-ГГГГ`.
 * @format date-dd-MM-yyyy
 * @example "23-09-2022"
 */
export type DateDdMmYyyy = string;

/** Период, за который рассчитывается итоговый список нерабочих дней службы доставки. */
export interface CampaignSettingsTimePeriodDTO {
  /**
   * Дата (включительно) начала периода, по которому рассчитан итоговый список нерабочих дней службы доставки.
   *
   * Формат даты: `ДД-ММ-ГГГГ`.
   */
  fromDate?: DateDdMmYyyy;
  /**
   * Дата (включительно) окончания периода, по которому рассчитан итоговый список нерабочих дней службы доставки.
   *
   * Формат даты: `ДД-ММ-ГГГГ`.
   */
  toDate?: DateDdMmYyyy;
}

/** Расписание работы службы доставки в своем регионе. */
export interface CampaignSettingsScheduleDTO {
  /**
   * Признак работы службы доставки в государственные праздники.
   * Возможные значения.
   * * `false` — служба доставки не работает в праздничные дни.
   * * `true` — служба доставки работает в праздничные дни.
   */
  availableOnHolidays?: boolean;
  /**
   * Список дней, в которые служба доставки не работает. Дни магазин указал в кабинете продавца на Маркете.
   * @uniqueItems true
   */
  customHolidays: DateDdMmYyyy[];
  /**
   * Список выходных и праздничных дней, в которые служба доставки работает. Дни магазин указал в кабинете продавца на Маркете.
   * @uniqueItems true
   */
  customWorkingDays: DateDdMmYyyy[];
  /** Период, за который рассчитывается итоговый список нерабочих дней службы доставки. */
  period?: CampaignSettingsTimePeriodDTO;
  /**
   * Итоговый список нерабочих дней службы доставки. Список рассчитывается с учетом выходных, нерабочих дней и государственных праздников. Информацию по ним магазин указывает в кабинете продавца на Маркете.
   * @uniqueItems true
   */
  totalHolidays: DateDdMmYyyy[];
  /**
   * Список выходных дней недели и государственных праздников.
   * @uniqueItems true
   */
  weeklyHolidays: number[];
}

/** Информация о доставке в своем регионе магазина. */
export interface CampaignSettingsDeliveryDTO {
  /** Расписание работы службы доставки в своем регионе. */
  schedule?: CampaignSettingsScheduleDTO;
}

/** Информация о своем регионе магазина. */
export interface CampaignSettingsLocalRegionDTO {
  /**
   * Идентификатор региона.
   * @format int64
   */
  id?: number;
  /** Название региона. */
  name?: string;
  /**
   * Тип региона.
   *
   * Возможные значения:
   *
   * * `CITY_DISTRICT` — район города.
   *
   * * `CITY` — крупный город.
   *
   * * `CONTINENT` — континент.
   *
   * * `COUNTRY_DISTRICT` — область.
   *
   * * `COUNTRY` — страна.
   *
   * * `REGION` — регион.
   *
   * * `REPUBLIC_AREA` — район субъекта федерации.
   *
   * * `REPUBLIC` — субъект федерации.
   *
   * * `SUBWAY_STATION` — станция метро.
   *
   * * `VILLAGE` — город.
   *
   * * `OTHER` — неизвестный регион.
   */
  type?: RegionType;
  /**
   * Источник информации о расписании работы службы доставки.
   * Возможные значения:
   * * `WEB` — информация получена из настроек кабинета продавца на Маркете.
   * * `YML` — информация получена из прайс-листа магазина.
   */
  deliveryOptionsSource?: CampaignSettingsScheduleSourceType;
  /** Информация о доставке в своем регионе магазина. */
  delivery?: CampaignSettingsDeliveryDTO;
}

/** Настройки магазина. */
export interface CampaignSettingsDTO {
  /**
   * Идентификатор региона, в котором находится магазин.
   * @format int64
   */
  countryRegion?: number;
  /**
   * Наименование магазина на Яндекс Маркете.
   * Если наименование отсутствует, значение параметра выводится — `null`.
   */
  shopName?: string;
  /**
   * Признак размещения магазина на сайтах партнеров Яндекс Дистрибуции.
   * Возможные значения:
   * * `false` — магазин не размещен на сайтах партнеров Яндекс Дистрибуции.
   * * `true` — магазин размещен на сайтах партнеров Яндекс Дистрибуции.
   * @deprecated
   */
  showInContext?: boolean;
  /**
   * Признак показа предложений магазина в блоке над результатами поиска (cпецразмещение).
   * Возможные значения:
   * * `false` — предложения не показываются в блоке cпецразмещения.
   * * `true` — предложения показываются в блоке cпецразмещения.
   * @deprecated
   */
  showInPremium?: boolean;
  /**
   * Признак использования внешней интернет-статистики.
   * Возможные значения:
   * * `false` — внешняя интернет-статистика не используется.
   * * `true` — внешняя интернет-статистика используется.
   * @deprecated
   */
  useOpenStat?: boolean;
  /** Информация о своем регионе магазина. */
  localRegion?: CampaignSettingsLocalRegionDTO;
}

/** Ответ на запрос настроек магазина. */
export interface GetCampaignSettingsResponse {
  /** Настройки магазина. */
  settings?: CampaignSettingsDTO;
}

/**
 * @format date-dd-MM-yyyy-HH-mm-ss
 * @example "23-09-2022 09:12:41"
 */
export type DateDdMmYyyyHhMmSs = string;

/**
 * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
 *
 * Правила использования :no-translate[SKU]:
 *
 * * У каждого товара :no-translate[SKU] должен быть свой.
 *
 * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
 *
 * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
 *
 * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
 * @minLength 1
 * @maxLength 255
 * @pattern ^(?=.*\S.*)[^\x00-\x08\x0A-\x1f\x7f]{1,255}$
 */
export type ShopSku = string;

/** Информация о вознаграждениях продавцу за скидки на товар по промокодам, купонам и акциям. */
export interface OrderItemPromoDTO {
  /** Тип скидки. */
  type: OrderPromoType;
  /**
   * Размер пользовательской скидки в валюте покупателя.
   * @format decimal
   */
  discount?: number;
  /**
   * Вознаграждение продавцу от Маркета за товар, проданный в рамках акции.
   * @format decimal
   */
  subsidy: number;
  /** Идентификатор акции поставщика. */
  shopPromoId?: string;
  /** Идентификатор акции в рамках соглашения на оказание услуг по продвижению сервиса между Маркетом и продавцом. */
  marketPromoId?: string;
}

/**
 * Страна производства в формате ISO 3166-1 alpha-2. [Как получить](../../reference/regions/getRegionsCodes.md)
 * @minLength 2
 * @maxLength 2
 * @pattern ^[A-Z]{2}$
 * @example "RU"
 */
export type CountryCode = string;

/** Переданные вами для данной позиции коды маркировки или УИНы. Коды «Честного знака» возвращаются в двух вариантах — с криптохвостом и без. */
export interface OrderItemInstanceDTO {
  /** Код идентификации единицы товара в системе [«Честный ЗНАК»](https://честныйзнак.рф/) без криптохвоста или [«ASL BELGISI»](https://aslbelgisi.uz) (для продавцов Market Yandex Go). */
  cis?: string;
  /** Код идентификации единицы товара в системе [«Честный ЗНАК»](https://честныйзнак.рф/) с криптохвостом. */
  cisFull?: string;
  /**
   * УИН ювелирного изделия (16-значный код)
   * Производитель получает УИН, когда регистрирует изделие в системе контроля за оборотом драгоценных металлов и камней — ГИИС ДМДК.
   */
  uin?: string;
  /**
   * Регистрационный номер партии товара.
   *
   * Представляет собой строку из четырех чисел, разделенных косой чертой: ХХХХХХХХ/ХХХХХХ/ХХХХХХХ/ХХХ.
   *
   * Первая часть — код таможни, которая зарегистрировала декларацию на партию товара. Далее — дата, номер декларации и номер маркированного товара в декларации.
   */
  rnpt?: string;
  /**
   * Грузовая таможенная декларация.
   *
   * Представляет собой строку из трех чисел, разделенных косой чертой: ХХХХХХХХ/ХХХХХХ/ХХХХХХХ.
   *
   * Первая часть — код таможни, которая зарегистрировала декларацию на ввезенные товары. Далее — дата и номер декларации.
   */
  gtd?: string;
  /** Страна производства в формате ISO 3166-1 alpha-2. [Как получить](../../reference/regions/getRegionsCodes.md) */
  countryCode?: CountryCode;
}

/** Детали по товару в заказе. */
export interface OrderItemDetailDTO {
  /**
   * Количество единиц товара.
   * @format int64
   */
  itemCount: number;
  /**
   * Невыкупленный или возвращенный товар:
   *
   * * `REJECTED` — невыкупленный.
   *
   * * `RETURNED` — возвращенный.
   */
  itemStatus: OrderItemStatusType;
  /** Формат даты: `ДД-ММ-ГГГГ`. */
  updateDate: DateDdMmYyyy;
}

/**
 * Общее вознаграждение продавцу за все скидки на товар:
 *
 * * по промокодам, купонам и акциям;
 * * по баллам Плюса.
 *
 * Включает НДС.
 */
export interface OrderItemSubsidyDTO {
  /**
   * Тип субсидии:
   *
   * * `YANDEX_CASHBACK` — скидка по подписке Яндекс Плюс.
   *
   * * `SUBSIDY` — скидка Маркета (по акциям, промокодам, купонам и т. д.).
   */
  type: OrderItemSubsidyType;
  /**
   * Сумма субсидии.
   * @format decimal
   */
  amount: number;
}

/** Список товаров в заказе. */
export interface OrderItemDTO {
  /**
   * Идентификатор товара в заказе.
   *
   * Позволяет идентифицировать товар в рамках данного заказа.
   * @format int64
   */
  id: number;
  /** Идентификатор вашего товарного предложения для определенного товара. [Описание поля в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/assortment/fields/index.html#sku) */
  offerId: ShopSku;
  /** Название товара. */
  offerName: string;
  /**
   * Цена на товар в валюте заказа без учета вознаграждения продавцу за скидки по промокодам, купонам и акциям (параметр `subsidies`).
   *
   * Включает НДС.
   * @format decimal
   */
  price: number;
  /**
   * Цена на товар в валюте покупателя. В цене уже учтены скидки по:
   *
   * * акциям;
   * * купонам;
   * * промокодам.
   * @format decimal
   */
  buyerPrice: number;
  /**
   * Стоимость товара в валюте покупателя до применения скидок по:
   *
   * * акциям;
   * * купонам;
   * * промокодам.
   * @format decimal
   */
  buyerPriceBeforeDiscount: number;
  /**
   * Стоимость товара в валюте магазина до применения скидок.
   * @deprecated
   * @format decimal
   */
  priceBeforeDiscount?: number;
  /** Количество единиц товара. */
  count: number;
  /** Налог на добавленную стоимость (НДС) на товар. */
  vat: OrderVatType;
  /**
   * {% note warning "Вместо него используйте `offerId`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Ваш SKU — идентификатор товара в вашей системе.
   * @deprecated
   */
  shopSku?: ShopSku;
  /**
   * {% note warning "Вместо него используйте `subsidies`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Общее вознаграждение продавцу за DBS-доставку и все скидки на товар:
   *
   * * по промокодам;
   * * по купонам;
   * * по баллам Плюса;
   * * по акциям.
   * @deprecated
   * @format decimal
   */
  subsidy?: number;
  /**
   * Идентификатор склада в системе магазина, на который сформирован заказ.
   * @deprecated
   */
  partnerWarehouseId?: string;
  /**
   * Информация о вознаграждениях продавцу за скидки на товар по промокодам, купонам и акциям.
   * @minItems 1
   */
  promos?: OrderItemPromoDTO[] | null;
  /**
   * Информация о маркировке единиц товара.
   *
   * Возвращаются данные для маркировки, переданные в запросе [PUT campaigns/{campaignId}/orders/{orderId}/identifiers](../../reference/orders/provideOrderItemIdentifiers.md).
   *
   * Если магазин еще не передавал коды для этого заказа, `instances` отсутствует.
   * @minItems 1
   */
  instances?: OrderItemInstanceDTO[] | null;
  /**
   * {% note warning "Для получения информации о невыкупах и возвратах используйте [GET campaigns/{campaignId}/returns](../../reference/orders/getReturns.md)." %}
   *
   *
   *
   * {% endnote %}
   *
   * Информация о невыкупленных или возвращенных товарах в заказе.
   * @deprecated
   * @minItems 1
   */
  details?: OrderItemDetailDTO[] | null;
  /**
   * Список субсидий по типам.
   * @minItems 1
   */
  subsidies?: OrderItemSubsidyDTO[] | null;
  /**
   * Список необходимых маркировок товара.
   * @minItems 1
   * @uniqueItems true
   */
  requiredInstanceTypes?: OrderItemInstanceType[] | null;
  /**
   * Признаки товара.
   * @minItems 1
   * @uniqueItems true
   */
  tags?: OrderItemTagType[] | null;
}

/**
 * Общее вознаграждение продавцу за DBS-доставку и все скидки на товар:
 *
 * * по промокодам, купонам и акциям;
 * * по баллам Плюса;
 * * по доставке (DBS).
 *
 * Включает НДС.
 */
export interface OrderSubsidyDTO {
  /**
   * Тип субсидии:
   *
   * * `YANDEX_CASHBACK` — скидка по подписке Яндекс Плюс.
   *
   * * `SUBSIDY` — скидка Маркета (по акциям, промокодам, купонам и т. д.)
   *
   * * `DELIVERY` — скидка за доставку (DBS).
   */
  type: OrderSubsidyType;
  /**
   * Сумма субсидии.
   * @format decimal
   */
  amount: number;
}

/** Информация о курьере. */
export interface OrderCourierDTO {
  /** Полное имя курьера. */
  fullName?: string;
  /** Номер телефона курьера. */
  phone?: string;
  /** Добавочный номер телефона. */
  phoneExtension?: string;
  /** Номер транспортного средства. */
  vehicleNumber?: string;
  /** Описание машины. Например, модель и цвет. */
  vehicleDescription?: string;
}

/** Диапазон дат доставки. */
export interface OrderDeliveryDatesDTO {
  /**
   * Ближайшая дата доставки.
   *
   * Формат даты: `ДД-ММ-ГГГГ`.
   */
  fromDate: DateDdMmYyyy;
  /**
   * Самая поздняя дата доставки.
   *
   * Если параметр `toDate` не указан, единственно возможной датой доставки считается дата, указанная в параметре `fromDate`.
   *
   * Формат даты: `ДД-ММ-ГГГГ`.
   */
  toDate?: DateDdMmYyyy;
  /**
   * Начало интервала времени доставки.
   *
   * Передается только совместно с параметром `type=DELIVERY`.
   *
   * Формат времени: 24-часовой, `ЧЧ:ММ`. В качестве минут всегда должно быть указано `00` (исключение — `23:59`).
   *
   * Минимальное значение: `00:00`.
   * @format time
   */
  fromTime?: string;
  /**
   * Конец интервала времени доставки.
   *
   * Передается только совместно с параметром `type=DELIVERY`.
   *
   * Формат времени: 24-часовой, `ЧЧ:ММ`. В качестве минут всегда должно быть указано `00` (исключение — `23:59`).
   *
   * Максимальное значение: `23:59`.
   * @format time
   */
  toTime?: string;
  /** Дата, когда товар доставлен до пункта выдачи заказа (в случае самовывоза) или до покупателя (если заказ доставляет курьер). */
  realDeliveryDate?: DateDdMmYyyy;
}

/** Регион доставки. */
export interface RegionDTO {
  /**
   * Идентификатор региона.
   * @format int64
   */
  id: number;
  /** Название региона. */
  name: string;
  /** Тип региона. */
  type: RegionType;
  /**
   * Информация о родительском регионе.
   *
   * Указываются родительские регионы до уровня страны.
   */
  parent?: RegionDTO;
  /**
   * Дочерние регионы.
   * @minItems 1
   */
  children?: RegionDTO[] | null;
}

/** GPS-координаты широты и долготы. */
export interface GpsDTO {
  /**
   * Широта.
   * @format decimal
   */
  latitude: number;
  /**
   * Долгота.
   * @format decimal
   */
  longitude: number;
}

/**
 * Адрес доставки.
 *
 * Указывается, если параметр `type` принимает значение `DELIVERY`, `POST` или `PICKUP` (только для модели DBS). Если `type=PICKUP`, возвращается адрес пункта выдачи.
 */
export interface OrderDeliveryAddressDTO {
  /** Страна. */
  country?: string;
  /**
   * Почтовый индекс.
   *
   * Указывается, если выбрана доставка почтой (`delivery type=POST`).
   */
  postcode?: string;
  /** Город или населенный пункт. */
  city?: string;
  /** Район. */
  district?: string;
  /** Станция метро. */
  subway?: string;
  /** Улица. */
  street?: string;
  /** Дом. */
  house?: string;
  /** Владение. */
  estate?: string;
  /** Корпус. */
  block?: string;
  /** Строение. */
  building?: string;
  /** Подъезд. */
  entrance?: string;
  /** Код домофона. */
  entryphone?: string;
  /** Этаж. */
  floor?: string;
  /** Квартира или офис. */
  apartment?: string;
  /** Телефон получателя заказа. */
  phone?: string;
  /** Фамилия, имя и отчество получателя заказа. */
  recipient?: string;
  /** GPS-координаты. */
  gps?: GpsDTO;
}

/** Информация о трек-номере посылки (:no-translate[DBS]). */
export interface OrderTrackDTO {
  /** Трек‑номер посылки. */
  trackCode?: string;
  /**
   * Идентификатор службы доставки. Информацию о службе доставки можно получить с помощью запроса [GET delivery/services](../../reference/orders/getDeliveryServices.md).
   * @format int64
   */
  deliveryServiceId: number;
}

/** Информация о грузоместе. */
export interface OrderParcelBoxDTO {
  /**
   * Идентификатор грузоместа.
   * @format int64
   */
  id: number;
  /** Идентификатор грузового места в информационной системе магазина. */
  fulfilmentId: string;
}

/**
 * Список посылок.
 *
 * В параметре может указываться несколько посылок.
 */
export interface OrderShipmentDTO {
  /**
   * Идентификатор посылки, присвоенный Маркетом.
   * @format int64
   */
  id?: number;
  /**
   * День, в который нужно отгрузить заказ службе доставки.
   *
   * Формат даты: `ДД-ММ-ГГГГ`.
   *
   * Если заказ сделан организацией, параметр не возвращается до согласования даты доставки.
   *
   * {% cut "Иногда Маркет может перенести дату отгрузки" %}
   *
   * У таких заказов обновится параметр `updatedAt`. Чтобы найти их, в запросе [GET campaigns/{campaignId}/orders](../../reference/orders/getOrders.md) укажите параметры `updatedAtFrom` и `updatedAtTo`.
   *
   * {% endcut %}
   *
   *
   */
  shipmentDate?: DateDdMmYyyy;
  /**
   * **Только для модели Экспресс**
   *
   * Время, к которому магазин должен упаковать заказ и перевести его в статус `READY_TO_SHIP`. После смены статуса за заказом приедет курьер.
   *
   * Поле может появиться не сразу. Запрашивайте информацию о заказе в течении 5–10 минут, пока оно не вернется.
   *
   * Формат времени: 24-часовой, `ЧЧ:ММ`.
   *
   * Если заказ сделан организацией, параметр не возвращается до согласования даты доставки.
   */
  shipmentTime?: string;
  /**
   * **Только для модели :no-translate[DBS]**
   *
   * Информация для отслеживания перемещений посылки.
   * @minItems 1
   */
  tracks?: OrderTrackDTO[] | null;
  /**
   * Список грузовых мест.
   * @minItems 1
   */
  boxes?: OrderParcelBoxDTO[] | null;
}

/** Информация о доставке. */
export interface OrderDeliveryDTO {
  /**
   * Идентификатор доставки, присвоенный магазином.
   *
   * Указывается, только если магазин передал данный идентификатор в ответе на запрос методом `POST cart`.
   * @deprecated
   */
  id?: string;
  /** Способ доставки заказа. */
  type: OrderDeliveryType;
  /** Наименование службы доставки. */
  serviceName: string;
  /**
   * {% note warning "Стоимость доставки смотрите в параметре `deliveryTotal`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Стоимость доставки в валюте заказа.
   * @deprecated
   * @format decimal
   */
  price?: number;
  /** Тип сотрудничества со службой доставки в рамках конкретного заказа. */
  deliveryPartnerType: OrderDeliveryPartnerType;
  /** Информация о курьере. */
  courier?: OrderCourierDTO;
  /** Диапазон дат доставки. */
  dates: OrderDeliveryDatesDTO;
  /** Регион доставки. */
  region?: RegionDTO;
  /**
   * Адрес доставки.
   *
   * Указывается, если параметр `type` принимает значение `DELIVERY`, `POST` или `PICKUP` (только для модели DBS). Если `type=PICKUP`, возвращается адрес пункта выдачи.
   */
  address?: OrderDeliveryAddressDTO;
  /**
   * Налог на добавленную стоимость (НДС) на товар:
   *
   * * `NO_VAT` — НДС не облагается, используется только для отдельных видов услуг.
   *
   * * `VAT_0` — НДС 0%. Например, используется при продаже товаров, вывезенных в таможенной процедуре экспорта, или при оказании услуг по международной перевозке товаров.
   *
   * * `VAT_10` — НДС 10%. Например, используется при реализации отдельных продовольственных и медицинских товаров.
   *
   * * `VAT_10_110` — НДС 10/110. НДС 10%, применяется только при предоплате.
   *
   * * `VAT_20` — НДС 20%. Основной НДС с 2019 года.
   *
   * * `VAT_20_120` — НДС 20/120. НДС 20%, применяется только при предоплате.
   *
   * * `VAT_18` — НДС 18%. Основной НДС до 2019 года.
   *
   * * `VAT_18_118` — НДС 18/118. НДС использовался до 1 января 2019 года при предоплате.
   *
   * * `VAT_12` — НДС 12%. Используется только в Узбекистане.
   *
   * * `VAT_05` — НДС 5%. НДС для упрощенной системы налогообложения (УСН).
   *
   * * `VAT_07` — НДС 7%. НДС для упрощенной системы налогообложения (УСН).
   *
   * * `UNKNOWN_VALUE` — неизвестный тип.
   *
   * Используется только совместно с параметром `payment-method=YANDEX`.
   */
  vat?: OrderVatType;
  /**
   * Идентификатор службы доставки.
   * @format int64
   */
  deliveryServiceId: number;
  /**
   * Тип подъема заказа на этаж:
   *
   * * `NOT_NEEDED` — не требуется.
   *
   * * `MANUAL` — ручной.
   *
   * * `ELEVATOR` — лифт.
   *
   * * `CARGO_ELEVATOR` — грузовой лифт.
   *
   * * `FREE` — любой из перечисленных выше, если включена опция бесплатного подъема.
   *
   * * `UNKNOWN` — неизвестный тип.
   */
  liftType?: OrderLiftType;
  /**
   * Стоимость подъема на этаж.
   * @format decimal
   */
  liftPrice?: number;
  /** Идентификатор пункта самовывоза, присвоенный магазином. */
  outletCode?: string;
  /**
   * Дата, до которой заказ будет храниться в пункте выдачи. Возвращается, когда заказ переходит в статус `PICKUP`.
   *
   * Один раз дату можно поменять с помощью метода [PUT campaigns/{campaignId}/orders/{orderId}/delivery/storage-limit](../../reference/orders/updateOrderStorageLimit.md).
   */
  outletStorageLimitDate?: DateDdMmYyyy;
  /**
   * Способ отгрузки:
   *
   * * `BUYER` — доставка покупателю.
   *
   * * `MARKET_BRANDED_OUTLET` — доставка в пункт выдачи заказов Маркета.
   *
   * * `SHOP_OUTLET` — доставка в пункт выдачи заказов магазина.
   *
   * * `UNKNOWN` — неизвестный тип.
   */
  dispatchType?: OrderDeliveryDispatchType;
  /**
   * Информация для отслеживания перемещений посылки.
   * @minItems 1
   */
  tracks?: OrderTrackDTO[] | null;
  /**
   * Информация о посылках.
   * @minItems 1
   */
  shipments?: OrderShipmentDTO[] | null;
  /** Приблизительная ли дата доставки. */
  estimated?: boolean;
  /** Тип кода подтверждения ЭАПП. */
  eacType?: OrderDeliveryEacType;
  /** Код подтверждения ЭАПП (для типа `MERCHANT_TO_COURIER`). */
  eacCode?: string;
}

/** Информация о покупателе с базовыми полями. */
export interface OrderBuyerBasicInfoDTO {
  /** Идентификатор покупателя. */
  id?: string;
  /** Фамилия покупателя. */
  lastName?: string;
  /** Имя покупателя. */
  firstName?: string;
  /** Отчество покупателя. */
  middleName?: string;
  /** Тип покупателя: физическое лицо или организация. Этот параметр используется FBS- и FBY-магазинами, размещающими товары на витрине business.market.yandex.ru. */
  type: OrderBuyerType;
}

/**
 * Информация о покупателе.
 *
 * Параметры `id`, `lastName`, `firstName` и `middleName` возвращаются, только если вы работаете по модели :no-translate[DBS].
 */
export type OrderBuyerDTO = OrderBuyerBasicInfoDTO;

/** Заказ. */
export interface OrderDTO {
  /**
   * Идентификатор заказа.
   * @format int64
   */
  id: number;
  /**
   * Внешний идентификатор заказа, который вы передали в [POST campaigns/{campaignId}/orders/{orderId}/external-id](../../reference/orders/updateExternalOrderId.md).
   * @minLength 1
   */
  externalOrderId?: string;
  /**
   * Статус заказа:
   *
   * * `PLACING` — оформляется, подготовка к резервированию.
   *
   * * `RESERVED` — зарезервирован, но недооформлен.
   *
   * * `UNPAID` — оформлен, но еще не оплачен (если выбрана оплата при оформлении).
   *
   * * `PROCESSING` — находится в обработке.
   *
   * * `DELIVERY` — передан в службу доставки.
   *
   * * `PICKUP` — доставлен в пункт самовывоза.
   *
   * * `DELIVERED` — получен покупателем.
   *
   * * `CANCELLED` — отменен.
   *
   * * `PENDING` — ожидает обработки со стороны продавца.
   *
   * * `PARTIALLY_RETURNED` — возвращен частично.
   *
   * * `RETURNED` — возвращен полностью.
   *
   * * `UNKNOWN` — неизвестный статус.
   *
   * Также могут возвращаться другие значения. Обрабатывать их не требуется.
   */
  status: OrderStatusType;
  /**
   * Этап обработки заказа (если он имеет статус `PROCESSING`) или причина отмены заказа (если он имеет статус `CANCELLED`).
   *
   * * Значения для заказа в статусе `PROCESSING`:
   *
   *     * `STARTED` — заказ подтвержден, его можно начать обрабатывать.
   *
   *     * `READY_TO_SHIP` — заказ собран и готов к отправке.
   *
   * * Значения для заказа в статусе `CANCELLED`:
   *
   *     * `RESERVATION_EXPIRED` — покупатель не завершил оформление зарезервированного заказа в течение 10 минут.
   *
   *     * `USER_NOT_PAID` — покупатель не оплатил заказ (для типа оплаты `PREPAID`) в течение 30 минут.
   *
   *     * `USER_UNREACHABLE` — не удалось связаться с покупателем. Для отмены с этой причиной необходимо выполнить условия:
   *
   *       * не менее 3 звонков с 8 до 21 в часовом поясе покупателя;
   *       * перерыв между первым и третьим звонком не менее 90 минут;
   *       * соединение не короче 5 секунд.
   *
   *       Если хотя бы одно из этих условий не выполнено (кроме случая, когда номер недоступен), отменить заказ не получится. Вернется ответ с кодом ошибки 400.
   *
   *     * `USER_CHANGED_MIND` — покупатель отменил заказ по личным причинам.
   *
   *     * `USER_REFUSED_DELIVERY` — покупателя не устроили условия доставки.
   *
   *     * `USER_REFUSED_PRODUCT` — покупателю не подошел товар.
   *
   *     * `SHOP_FAILED` — магазин не может выполнить заказ.
   *
   *     * `USER_REFUSED_QUALITY` — покупателя не устроило качество товара.
   *
   *     * `REPLACING_ORDER` — покупатель решил заменить товар другим по собственной инициативе.
   *
   *     * `PROCESSING_EXPIRED` — значение более не используется.
   *
   *     * `PICKUP_EXPIRED` — закончился срок хранения заказа в ПВЗ.
   *
   *     * `TOO_MANY_DELIVERY_DATE_CHANGES` — заказ переносили слишком много раз.
   *
   *     * `TOO_LONG_DELIVERY` — заказ доставляется слишком долго.
   *
   *
   * * `TECHNICAL_ERROR` — техническая ошибка на стороне Маркета. Обратитесь в поддержку.
   *
   * Также могут возвращаться другие значения. Обрабатывать их не требуется.
   */
  substatus: OrderSubstatusType;
  /**
   * Дата и время оформления заказа.
   *
   * Формат даты и времени: `ДД-ММ-ГГГГ ЧЧ:ММ:СС`. Часовой пояс — :no-translate[UTC+03:00] (Москва).
   */
  creationDate: DateDdMmYyyyHhMmSs;
  /**
   * Дата и время последнего обновления заказа.
   *
   * Формат даты и времени: `ДД-ММ-ГГГГ ЧЧ:ММ:СС`. Часовой пояс — :no-translate[UTC+03:00] (Москва).
   */
  updatedAt?: DateDdMmYyyyHhMmSs;
  /** Валюта, в которой указаны цены на товары в заказе. */
  currency: CurrencyType;
  /**
   * Платеж покупателя.
   * @format decimal
   */
  itemsTotal: number;
  /**
   * Стоимость доставки.
   * @format decimal
   */
  deliveryTotal: number;
  /**
   * Стоимость всех товаров в заказе в валюте покупателя после применения скидок и без учета стоимости доставки.
   * @deprecated
   * @format decimal
   */
  buyerItemsTotal?: number;
  /**
   * Стоимость всех товаров в заказе в валюте покупателя после применения скидок и с учетом стоимости доставки.
   * @deprecated
   * @format decimal
   */
  buyerTotal?: number;
  /**
   * Стоимость всех товаров в заказе в валюте покупателя без учета стоимости доставки и до применения скидок по:
   *
   * * акциям;
   * * купонам;
   * * промокодам.
   * @format decimal
   */
  buyerItemsTotalBeforeDiscount: number;
  /**
   * Стоимость всех товаров в заказе в валюте покупателя до применения скидок и с учетом стоимости доставки (`buyerItemsTotalBeforeDiscount` + стоимость доставки).
   * @deprecated
   * @format decimal
   */
  buyerTotalBeforeDiscount?: number;
  /**
   * Тип оплаты заказа:
   *
   * * `PREPAID` — оплата при оформлении заказа.
   *
   * * `POSTPAID` — оплата при получении заказа.
   *
   * * `UNKNOWN` — неизвестный тип.
   *
   * Если параметр отсутствует, заказ будет оплачен при получении.
   */
  paymentType: OrderPaymentType;
  /**
   * Способ оплаты заказа:
   *
   * * Значения, если выбрана оплата при оформлении заказа (`"paymentType": "PREPAID"`):
   *
   *   * `YANDEX` — банковской картой.
   *
   *   * `APPLE_PAY` — Apple Pay.
   *
   *   * `GOOGLE_PAY` — Google Pay.
   *
   *   * `CREDIT` — в кредит.
   *
   *   * `TINKOFF_CREDIT` — в кредит в Тинькофф Банке.
   *
   *   * `TINKOFF_INSTALLMENTS` — рассрочка в Тинькофф Банке.
   *
   *   * `EXTERNAL_CERTIFICATE` — подарочным сертификатом (например, из приложения «Сбербанк Онлайн»).
   *
   *   * `SBP` — через систему быстрых платежей.
   *
   *   * `B2B_ACCOUNT_PREPAYMENT` — заказ оплачивает организация.
   *
   *
   * * Значения, если выбрана оплата при получении заказа (`"paymentType": "POSTPAID"`):
   *
   *   * `CARD_ON_DELIVERY` — банковской картой.
   *
   *   * `BOUND_CARD_ON_DELIVERY` — привязанной картой при получении.
   *
   *   * `BNPL_BANK_ON_DELIVERY` — супер Сплитом.
   *
   *   * `BNPL_ON_DELIVERY` — Сплитом.
   *
   *   * `CASH_ON_DELIVERY` — наличными.
   *
   *   * `B2B_ACCOUNT_POSTPAYMENT` — заказ оплачивает организация после доставки.
   *
   * * `UNKNOWN` — неизвестный тип.
   *
   * Значение по умолчанию: `CASH_ON_DELIVERY`.
   */
  paymentMethod: OrderPaymentMethodType;
  /**
   * Тип заказа:
   *
   * * `false` — настоящий заказ покупателя.
   *
   * * `true` — [тестовый](../../concepts/sandbox.md) заказ Маркета.
   */
  fake: boolean;
  /** Список товаров в заказе. */
  items: OrderItemDTO[];
  /**
   * Список субсидий по типам.
   * @minItems 1
   */
  subsidies?: OrderSubsidyDTO[] | null;
  /** Информация о доставке. */
  delivery: OrderDeliveryDTO;
  /**
   * Информация о покупателе.
   *
   * Параметры `id`, `lastName`, `firstName` и `middleName` возвращаются, только если вы работаете по модели :no-translate[DBS].
   */
  buyer: OrderBuyerDTO;
  /** Комментарий к заказу. */
  notes?: string;
  /**
   * Система налогообложения (СНО) магазина на момент оформления заказа:
   *
   * * `ECHN` — единый сельскохозяйственный налог (ЕСХН).
   *
   * * `ENVD` — единый налог на вмененный доход (ЕНВД).
   *
   * * `OSN` — общая система налогообложения (ОСН).
   *
   * * `PSN` — патентная система налогообложения (ПСН).
   *
   * * `USN` — упрощенная система налогообложения (УСН).
   *
   * * `USN_MINUS_COST` — упрощенная система налогообложения, доходы, уменьшенные на величину расходов (УСН «Доходы минус расходы»).
   *
   * * `NPD` — налог на профессиональный доход (НПД).
   *
   * * `UNKNOWN_VALUE` — неизвестное значение.
   * Используется только совместно с параметром `payment-method=YANDEX`.
   */
  taxSystem: OrderTaxSystemType;
  /**
   * **Только для модели DBS**
   *
   * Запрошена ли отмена.
   */
  cancelRequested?: boolean;
  /**
   * Дата, после которой заказ будет отменен, если не сменит статус.
   *
   * Формат даты: `ДД-ММ-ГГГГ`.
   */
  expiryDate?: DateDdMmYyyyHhMmSs;
}

export interface GetOrderResponse {
  /** Заказ. */
  order?: OrderDTO;
}

/** Идентификатор следующей страницы. */
export interface ForwardScrollingPagerDTO {
  /** Идентификатор следующей страницы результатов. */
  nextPageToken?: string;
}

/** Модель для ответа :no-translate[API] списка информации по заказам. */
export interface GetOrdersResponse {
  /** Модель для пагинации. */
  pager?: FlippingPagerDTO;
  /**
   * Модель заказа.
   * @maxItems 50
   */
  orders: OrderDTO[];
  /** Информация о страницах с результатами. */
  paging?: ForwardScrollingPagerDTO;
}

/**
 * Код идентификации единицы товара в системе [«Честный ЗНАК»](https://честныйзнак.рф/) или [«ASL BELGISI»](https://aslbelgisi.uz) (для продавцов Market Yandex Go).
 *
 * {% note warning "Не экранируйте косую черту в коде символа-разделителя `\u001d`" %}
 *
 * ✅ `01030410947874432155Qbag!\u001d93Zjqw`
 *
 * ❌ `01030410947874432155Qbag!\\u001d93Zjqw`
 *
 * Косые черты и кавычки в других местах экранируйте по правилам JSON: `\\` и `\"`
 *
 * {% endnote %}
 */
export type Cis = string;

/**
 * Идентификатор единицы товара.
 *
 * Заполните только одно поле в зависимости от того, в какой системе маркирован товар.
 *
 * Подробно о работе с маркируемыми товарами рассказано [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/orders/cz.html).
 */
export interface BriefOrderItemInstanceDTO {
  /**
   * Код идентификации единицы товара в системе [«Честный ЗНАК»](https://честныйзнак.рф/) или [«ASL BELGISI»](https://aslbelgisi.uz) (для продавцов Market Yandex Go).
   *
   * {% note warning "Не экранируйте косую черту в коде символа-разделителя `\u001d`" %}
   *
   * ✅ `01030410947874432155Qbag!\u001d93Zjqw`
   *
   * ❌ `01030410947874432155Qbag!\\u001d93Zjqw`
   *
   * Косые черты и кавычки в других местах экранируйте по правилам JSON: `\\` и `\"`
   *
   * {% endnote %}
   */
  cis?: Cis;
  /**
   * Уникальный идентификационный номер ювелирного изделия.
   *
   * Представляет собой число из 16 цифр.
   */
  uin?: string;
  /**
   * Регистрационный номер партии товара.
   *
   * Представляет собой строку из четырех чисел, разделенных косой чертой: ХХХХХХХХ/ХХХХХХ/ХХХХХХХ/ХХХ.
   *
   * Первая часть — код таможни, которая зарегистрировала декларацию на партию товара. Далее — дата, номер декларации и номер маркированного товара в декларации.
   */
  rnpt?: string;
  /**
   * Грузовая таможенная декларация.
   *
   * Представляет собой строку из трех чисел, разделенных косой чертой: ХХХХХХХХ/ХХХХХХ/ХХХХХХХ.
   *
   * Первая часть — код таможни, которая зарегистрировала декларацию на ввезенные товары. Далее — дата и номер декларации.
   */
  gtd?: string;
  /** Страна производства в формате ISO 3166-1 alpha-2. [Как получить](../../reference/regions/getRegionsCodes.md) */
  countryCode?: CountryCode;
}

/** Позиция в корзине, требующая маркировки. */
export interface OrderItemInstanceModificationDTO {
  /**
   * Идентификатор товара в заказе.
   *
   * Он приходит в ответе на запрос [GET campaigns/{campaignId}/orders/{orderId}](../../reference/orders/getOrder.md) — параметр `id` в `items`.
   * @format int64
   */
  id: number;
  /** Список кодов маркировки единиц товара. */
  instances: BriefOrderItemInstanceDTO[];
}

export interface ProvideOrderItemIdentifiersRequest {
  /** Список позиций, требующих маркировки. */
  items: OrderItemInstanceModificationDTO[];
}

/** Информация о маркированном товаре. */
export interface BriefOrderItemDTO {
  /**
   * Идентификатор товара в заказе.
   *
   * Позволяет идентифицировать товар в рамках данного заказа.
   * @format int64
   */
  id?: number;
  /** Налог на добавленную стоимость (НДС) на услугу доставки заказа. */
  vat?: OrderVatType;
  /**
   * Количество единиц товара.
   * @format int32
   */
  count?: number;
  /** Цена на товар. Указана в той валюте, которая была задана в каталоге. Разделитель целой и дробной части — точка. */
  price?: number;
  /** Название товара. */
  offerName?: string;
  /** Ваш идентификатор товара. */
  offerId?: ShopSku;
  /**
   * Переданные вами коды маркировки.
   * @minItems 1
   */
  instances?: OrderItemInstanceDTO[] | null;
}

/** Краткие сведения о промаркированных товарах. Параметр возвращается, если ответ `OK`. */
export interface OrderItemsModificationResultDTO {
  /** Список позиций в заказе, подлежащих маркировке. */
  items: BriefOrderItemDTO[];
}

export type ProvideOrderItemIdentifiersResponse = ApiResponse & {
  /** Краткие сведения о промаркированных товарах. Параметр возвращается, если ответ `OK`. */
  result?: OrderItemsModificationResultDTO;
};

/**
 * Список товаров в заказе.
 *
 * Если магазин не передал информацию о товаре во входных данных, он будет удален из заказа.
 *
 * Обязательный параметр.
 */
export interface OrderItemModificationDTO {
  /**
   * Идентификатор товара в рамках заказа.
   *
   * Получить идентификатор можно с помощью ресурсов [GET campaigns/{campaignId}/orders](../../reference/orders/getOrders.md) или [GET campaigns/{campaignId}/orders/{orderId}](../../reference/orders/getOrder.md).
   *
   * Обязательный параметр.
   * @format int64
   */
  id: number;
  /**
   * Новое количество товара.
   * @format int32
   * @min 0
   */
  count: number;
  /**
   * Информация о маркировке единиц товара.
   *
   * Передавайте в запросе все единицы товара, который подлежит маркировке.
   *
   * Обязательный параметр, если в заказе от бизнеса есть товары, подлежащие маркировке в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) или [:no-translate[«ASL BELGISI»]](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]).
   * @minItems 1
   */
  instances?: BriefOrderItemInstanceDTO[] | null;
}

/** Запрос на обновление состава заказа. */
export interface UpdateOrderItemRequest {
  /**
   * Список товаров в заказе.
   *
   * Если магазин не передал информацию о товаре во входных данных, он будет удален из заказа.
   *
   * Обязательный параметр.
   * @minItems 1
   */
  items: OrderItemModificationDTO[];
  /**
   * Причина, почему обновился состав заказа:
   *
   * * `PARTNER_REQUESTED_REMOVE` — магазин удалил товар.
   * * `USER_REQUESTED_REMOVE` — покупатель попросил удалить товар.
   */
  reason?: OrderItemsModificationRequestReasonType;
}

/** Диапазон дат доставки. */
export interface OrderStatusChangeDeliveryDatesDTO {
  /**
   * **Только для модели DBS**
   *
   * Фактическая дата доставки.
   * <br><br>
   * Когда передавать параметр `realDeliveryDate`:
   *
   * * Не передавайте параметр, если:
   *   * переводите заказ в любой статус, кроме `PICKUP` или `DELIVERED`;
   *   * меняете статус заказа на `PICKUP` или `DELIVERED` в день доставки — будет указана дата выполнения запроса.
   * * Передавайте дату доставки, если переводите заказ в статус `PICKUP` или `DELIVERED` не в день доставки. Нельзя указывать дату доставки в будущем.
   *
   *   {% note warning "Передача статуса после установленного срока снижает индекс качества" %}
   *
   *   О сроках читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/quality/tech#dbs).
   *
   *   {% endnote %}
   *
   *
   * @format date
   */
  realDeliveryDate?: string;
}

/** Информация о доставке. */
export interface OrderStatusChangeDeliveryDTO {
  /** Диапазон дат доставки. */
  dates?: OrderStatusChangeDeliveryDatesDTO;
}

/** Заказ. */
export interface OrderStatusChangeDTO {
  /**
   * Статус заказа:
   *
   * * `PLACING` — оформляется, подготовка к резервированию.
   *
   * * `RESERVED` — зарезервирован, но недооформлен.
   *
   * * `UNPAID` — оформлен, но еще не оплачен (если выбрана оплата при оформлении).
   *
   * * `PROCESSING` — находится в обработке.
   *
   * * `DELIVERY` — передан в службу доставки.
   *
   * * `PICKUP` — доставлен в пункт самовывоза.
   *
   * * `DELIVERED` — получен покупателем.
   *
   * * `CANCELLED` — отменен.
   *
   * * `PENDING` — ожидает обработки со стороны продавца.
   *
   * * `PARTIALLY_RETURNED` — возвращен частично.
   *
   * * `RETURNED` — возвращен полностью.
   *
   * * `UNKNOWN` — неизвестный статус.
   *
   * Также могут возвращаться другие значения. Обрабатывать их не требуется.
   */
  status: OrderStatusType;
  /**
   * Этап обработки заказа (если он имеет статус `PROCESSING`) или причина отмены заказа (если он имеет статус `CANCELLED`).
   *
   * * Значения для заказа в статусе `PROCESSING`:
   *
   *     * `STARTED` — заказ подтвержден, его можно начать обрабатывать.
   *
   *     * `READY_TO_SHIP` — заказ собран и готов к отправке.
   *
   * * Значения для заказа в статусе `CANCELLED`:
   *
   *     * `RESERVATION_EXPIRED` — покупатель не завершил оформление зарезервированного заказа в течение 10 минут.
   *
   *     * `USER_NOT_PAID` — покупатель не оплатил заказ (для типа оплаты `PREPAID`) в течение 30 минут.
   *
   *     * `USER_UNREACHABLE` — не удалось связаться с покупателем. Для отмены с этой причиной необходимо выполнить условия:
   *
   *       * не менее 3 звонков с 8 до 21 в часовом поясе покупателя;
   *       * перерыв между первым и третьим звонком не менее 90 минут;
   *       * соединение не короче 5 секунд.
   *
   *       Если хотя бы одно из этих условий не выполнено (кроме случая, когда номер недоступен), отменить заказ не получится. Вернется ответ с кодом ошибки 400.
   *
   *     * `USER_CHANGED_MIND` — покупатель отменил заказ по личным причинам.
   *
   *     * `USER_REFUSED_DELIVERY` — покупателя не устроили условия доставки.
   *
   *     * `USER_REFUSED_PRODUCT` — покупателю не подошел товар.
   *
   *     * `SHOP_FAILED` — магазин не может выполнить заказ.
   *
   *     * `USER_REFUSED_QUALITY` — покупателя не устроило качество товара.
   *
   *     * `REPLACING_ORDER` — покупатель решил заменить товар другим по собственной инициативе.
   *
   *     * `PROCESSING_EXPIRED` — значение более не используется.
   *
   *     * `PICKUP_EXPIRED` — закончился срок хранения заказа в ПВЗ.
   *
   *     * `TOO_MANY_DELIVERY_DATE_CHANGES` — заказ переносили слишком много раз.
   *
   *     * `TOO_LONG_DELIVERY` — заказ доставляется слишком долго.
   *
   *
   * * `TECHNICAL_ERROR` — техническая ошибка на стороне Маркета. Обратитесь в поддержку.
   *
   * Также могут возвращаться другие значения. Обрабатывать их не требуется.
   */
  substatus?: OrderSubstatusType;
  /** Информация о доставке. */
  delivery?: OrderStatusChangeDeliveryDTO;
}

export interface UpdateOrderStatusRequest {
  /** Заказ. */
  order: OrderStatusChangeDTO;
}

/** Информация об изменении статуса заказа. */
export interface UpdateOrderStatusResponse {
  /** Заказ. */
  order?: OrderDTO;
}

/** Информация по заказу. */
export interface OrderStateDTO {
  /**
   * Идентификатор заказа.
   * @format int64
   */
  id: number;
  /**
   * Статус заказа:
   *
   * * `PLACING` — оформляется, подготовка к резервированию.
   *
   * * `RESERVED` — зарезервирован, но недооформлен.
   *
   * * `UNPAID` — оформлен, но еще не оплачен (если выбрана оплата при оформлении).
   *
   * * `PROCESSING` — находится в обработке.
   *
   * * `DELIVERY` — передан в службу доставки.
   *
   * * `PICKUP` — доставлен в пункт самовывоза.
   *
   * * `DELIVERED` — получен покупателем.
   *
   * * `CANCELLED` — отменен.
   *
   * * `PENDING` — ожидает обработки со стороны продавца.
   *
   * * `PARTIALLY_RETURNED` — возвращен частично.
   *
   * * `RETURNED` — возвращен полностью.
   *
   * * `UNKNOWN` — неизвестный статус.
   *
   * Также могут возвращаться другие значения. Обрабатывать их не требуется.
   */
  status: OrderStatusType;
  /**
   * Этап обработки заказа (если он имеет статус `PROCESSING`) или причина отмены заказа (если он имеет статус `CANCELLED`).
   *
   * * Значения для заказа в статусе `PROCESSING`:
   *
   *     * `STARTED` — заказ подтвержден, его можно начать обрабатывать.
   *
   *     * `READY_TO_SHIP` — заказ собран и готов к отправке.
   *
   * * Значения для заказа в статусе `CANCELLED`:
   *
   *     * `RESERVATION_EXPIRED` — покупатель не завершил оформление зарезервированного заказа в течение 10 минут.
   *
   *     * `USER_NOT_PAID` — покупатель не оплатил заказ (для типа оплаты `PREPAID`) в течение 30 минут.
   *
   *     * `USER_UNREACHABLE` — не удалось связаться с покупателем. Для отмены с этой причиной необходимо выполнить условия:
   *
   *       * не менее 3 звонков с 8 до 21 в часовом поясе покупателя;
   *       * перерыв между первым и третьим звонком не менее 90 минут;
   *       * соединение не короче 5 секунд.
   *
   *       Если хотя бы одно из этих условий не выполнено (кроме случая, когда номер недоступен), отменить заказ не получится. Вернется ответ с кодом ошибки 400.
   *
   *     * `USER_CHANGED_MIND` — покупатель отменил заказ по личным причинам.
   *
   *     * `USER_REFUSED_DELIVERY` — покупателя не устроили условия доставки.
   *
   *     * `USER_REFUSED_PRODUCT` — покупателю не подошел товар.
   *
   *     * `SHOP_FAILED` — магазин не может выполнить заказ.
   *
   *     * `USER_REFUSED_QUALITY` — покупателя не устроило качество товара.
   *
   *     * `REPLACING_ORDER` — покупатель решил заменить товар другим по собственной инициативе.
   *
   *     * `PROCESSING_EXPIRED` — значение более не используется.
   *
   *     * `PICKUP_EXPIRED` — закончился срок хранения заказа в ПВЗ.
   *
   *     * `TOO_MANY_DELIVERY_DATE_CHANGES` — заказ переносили слишком много раз.
   *
   *     * `TOO_LONG_DELIVERY` — заказ доставляется слишком долго.
   *
   *
   * * `TECHNICAL_ERROR` — техническая ошибка на стороне Маркета. Обратитесь в поддержку.
   *
   * Также могут возвращаться другие значения. Обрабатывать их не требуется.
   */
  substatus?: OrderSubstatusType;
}

/** Список заказов. */
export interface UpdateOrderStatusesRequest {
  /**
   * Список заказов.
   * @maxItems 30
   * @minItems 1
   */
  orders: OrderStateDTO[];
}

/** Список заказов. */
export interface UpdateOrderStatusDTO {
  /**
   * Идентификатор заказа.
   * @format int64
   */
  id?: number;
  /**
   * Статус заказа:
   *
   * * `PLACING` — оформляется, подготовка к резервированию.
   *
   * * `RESERVED` — зарезервирован, но недооформлен.
   *
   * * `UNPAID` — оформлен, но еще не оплачен (если выбрана оплата при оформлении).
   *
   * * `PROCESSING` — находится в обработке.
   *
   * * `DELIVERY` — передан в службу доставки.
   *
   * * `PICKUP` — доставлен в пункт самовывоза.
   *
   * * `DELIVERED` — получен покупателем.
   *
   * * `CANCELLED` — отменен.
   *
   * * `PENDING` — ожидает обработки со стороны продавца.
   *
   * * `PARTIALLY_RETURNED` — возвращен частично.
   *
   * * `RETURNED` — возвращен полностью.
   *
   * * `UNKNOWN` — неизвестный статус.
   *
   * Также могут возвращаться другие значения. Обрабатывать их не требуется.
   */
  status?: OrderStatusType;
  /**
   * Этап обработки заказа (если он имеет статус `PROCESSING`) или причина отмены заказа (если он имеет статус `CANCELLED`).
   *
   * * Значения для заказа в статусе `PROCESSING`:
   *
   *     * `STARTED` — заказ подтвержден, его можно начать обрабатывать.
   *
   *     * `READY_TO_SHIP` — заказ собран и готов к отправке.
   *
   * * Значения для заказа в статусе `CANCELLED`:
   *
   *     * `RESERVATION_EXPIRED` — покупатель не завершил оформление зарезервированного заказа в течение 10 минут.
   *
   *     * `USER_NOT_PAID` — покупатель не оплатил заказ (для типа оплаты `PREPAID`) в течение 30 минут.
   *
   *     * `USER_UNREACHABLE` — не удалось связаться с покупателем. Для отмены с этой причиной необходимо выполнить условия:
   *
   *       * не менее 3 звонков с 8 до 21 в часовом поясе покупателя;
   *       * перерыв между первым и третьим звонком не менее 90 минут;
   *       * соединение не короче 5 секунд.
   *
   *       Если хотя бы одно из этих условий не выполнено (кроме случая, когда номер недоступен), отменить заказ не получится. Вернется ответ с кодом ошибки 400.
   *
   *     * `USER_CHANGED_MIND` — покупатель отменил заказ по личным причинам.
   *
   *     * `USER_REFUSED_DELIVERY` — покупателя не устроили условия доставки.
   *
   *     * `USER_REFUSED_PRODUCT` — покупателю не подошел товар.
   *
   *     * `SHOP_FAILED` — магазин не может выполнить заказ.
   *
   *     * `USER_REFUSED_QUALITY` — покупателя не устроило качество товара.
   *
   *     * `REPLACING_ORDER` — покупатель решил заменить товар другим по собственной инициативе.
   *
   *     * `PROCESSING_EXPIRED` — значение более не используется.
   *
   *     * `PICKUP_EXPIRED` — закончился срок хранения заказа в ПВЗ.
   *
   *     * `TOO_MANY_DELIVERY_DATE_CHANGES` — заказ переносили слишком много раз.
   *
   *     * `TOO_LONG_DELIVERY` — заказ доставляется слишком долго.
   *
   *
   * * `TECHNICAL_ERROR` — техническая ошибка на стороне Маркета. Обратитесь в поддержку.
   *
   * Также могут возвращаться другие значения. Обрабатывать их не требуется.
   */
  substatus?: OrderSubstatusType;
  /** Статус обновления. */
  updateStatus?: OrderUpdateStatusType;
  /**
   * Ошибка при изменении статуса заказа. Содержит описание ошибки и идентификатор заказа.
   *
   * Возвращается, если параметр `updateStatus` принимает значение `ERROR`.
   */
  errorDetails?: string;
}

/** Список заказов, статус которых обновился. */
export interface UpdateOrderStatusesDTO {
  /** Список с обновленными заказами. */
  orders: UpdateOrderStatusDTO[];
}

export type UpdateOrderStatusesResponse = ApiResponse & {
  /** Список заказов, статус которых обновился. */
  result?: UpdateOrderStatusesDTO;
};

/** Параметр отображает одно грузовое место. Вложенные поля больше не используются, передавайте параметр пустым. */
export interface ParcelBoxRequestDTO {
  /**
   * {% note warning "Не используйте этот параметр." %}
   *
   *
   *
   * {% endnote %}
   * @deprecated
   * @pattern ^[\p{Alnum}- ]*$
   */
  fulfilmentId?: string;
}

/** Информация о грузовых местах в заказе. */
export interface ParcelRequestDTO {
  /**
   * Список грузовых мест. По его длине Маркет определяет количество мест.
   * @minItems 1
   */
  boxes: ParcelBoxRequestDTO[];
}

export type SetOrderShipmentBoxesRequest = ParcelRequestDTO;

/** Параметр отображает одно грузовое место. */
export interface ParcelBoxDTO {
  /**
   * Идентификатор коробки в составе заказа.
   * @format int64
   */
  id?: number;
  /**
   * {% note warning "Не используйте этот параметр." %}
   *
   *
   *
   * {% endnote %}
   * @deprecated
   * @pattern ^[\p{Alnum}- ]*$
   */
  fulfilmentId?: string;
}

/** В ответе Маркет возвращает переданный вами список грузовых мест. Не обращайте на это поле внимания. */
export interface ShipmentBoxesDTO {
  /** Список грузовых мест. По его длине Маркет определил количество мест. */
  boxes: ParcelBoxDTO[];
}

export type SetOrderShipmentBoxesResponse = ApiResponse & {
  /** В ответе Маркет возвращает переданный вами список грузовых мест. Не обращайте на это поле внимания. */
  result?: ShipmentBoxesDTO;
};

export interface AcceptOrderCancellationRequest {
  /**
   * Решение об отмене заказа:
   *
   * * `true` — заказ отменяется, служба доставки узнала об отмене до передачи заказа покупателю.
   * * `false` — заказ не отменяется, так как он уже доставлен покупателю курьером или передан в пункт выдачи заказов.
   */
  accepted: boolean;
  /**
   * Причина, по которой заказ не может быть отменен (она сообщается покупателю).
   *
   * Обязательный параметр, если вы передаете `accepted="false"`.
   */
  reason?: OrderCancellationReasonType;
}

/** Пустой ответ сервера. */
export type EmptyApiResponse = ApiResponse;

/** Цифровой товар. */
export interface OrderDigitalItemDTO {
  /**
   * Идентификатор товара в заказе.
   *
   * Он приходит в ответе на запрос [GET campaigns/{campaignId}/orders/{orderId}](../../reference/orders/getOrder.md) — параметр `id` в `items`.
   * @format int64
   */
  id: number;
  /**
   * {% note warning "Вместо него используйте `codes`" %}
   *
   * Совместное использование обоих параметров приведет к ошибке.
   *
   * {% endnote %}
   *
   * Сам ключ.
   * @deprecated
   */
  code?: string;
  /**
   * Ключи, относящиеся к товару.
   * @maxItems 5000
   * @minItems 1
   * @uniqueItems true
   */
  codes?: string[] | null;
  /**
   * Инструкция по активации.
   *
   * Для форматирования текста можно использовать теги HTML:
   *
   * * \<h>, \<h1>, \<h2> и так далее — для заголовков;
   * * \<br> и \<p> — для переноса строки;
   * * \<ol> — для нумерованного списка;
   * * \<ul> — для маркированного списка;
   * * \<li> — для создания элементов списка (должен находиться внутри \<ol> или \<ul>);
   * * \<div> — поддерживается, но не влияет на отображение текста.
   * @maxLength 10000
   */
  slip: string;
  /**
   * Дата, до которой нужно активировать ключи. Если ключи действуют бессрочно, укажите любую дату в отдаленном будущем.
   *
   * Формат даты: `ГГГГ-ММ-ДД`.
   * @format date
   */
  activate_till: string;
}

/** Запрос на передачу ключей цифровых товаров. */
export interface ProvideOrderDigitalCodesRequest {
  /**
   * Список проданных товаров.
   *
   * Если в заказе есть несколько **одинаковых** товаров (например, несколько ключей к одной и той же подписке), передайте ключи в виде массива к этому товару. Параметр `id` у этих элементов должен быть один и тот же.
   * @maxItems 100
   * @minItems 1
   */
  items: OrderDigitalItemDTO[];
}

/** Информация о части товара в коробке. */
export interface OrderBoxLayoutPartialCountDTO {
  /**
   * Номер части, начиная с 1.
   * @format int32
   * @min 1
   */
  current: number;
  /**
   * На сколько всего частей разделен товар.
   * @format int32
   * @min 2
   */
  total: number;
}

/** Информация о товаре в коробке. */
export interface OrderBoxLayoutItemDTO {
  /**
   * Идентификатор товара в заказе.
   *
   * Он приходит в ответе на запрос [GET campaigns/{campaignId}/orders/{orderId}](../../reference/orders/getOrder.md) — параметр `id` в `items`.
   * @format int64
   */
  id: number;
  /**
   * Количество единиц товара в коробке.
   *
   * Используйте это поле, если в коробке поедут целые товары, не разделенные на части. Не используйте это поле одновременно с `partialCount`.
   * @format int32
   * @min 1
   */
  fullCount?: number;
  /**
   * Часть товара в коробке.
   *
   * Используйте это поле, если в коробке поедет часть большого товара. Не используйте это поле одновременно с `fullCount`.
   */
  partialCount?: OrderBoxLayoutPartialCountDTO;
  /**
   * Переданные вами коды маркировки.
   * @minItems 1
   */
  instances?: BriefOrderItemInstanceDTO[] | null;
}

/** Информация о коробке. */
export interface OrderBoxLayoutDTO {
  /**
   * Список товаров в коробке.
   *
   * Если в коробке едет часть большого товара, в списке может быть только один пункт.
   * @minItems 1
   */
  items: OrderBoxLayoutItemDTO[];
}

export interface SetOrderBoxLayoutRequest {
  /**
   * Список коробок.
   * @minItems 1
   */
  boxes: OrderBoxLayoutDTO[];
  /**
   * Передайте `true`, если вы собираетесь удалить часть товаров из заказа.
   * @default false
   */
  allowRemove?: boolean;
}

/** Информация о коробке. */
export type EnrichedOrderBoxLayoutDTO = OrderBoxLayoutDTO & {
  /**
   * Идентификатор коробки.
   * @format int64
   */
  boxId?: number;
};

/** Распределение товаров по коробкам. */
export interface OrderBoxesLayoutDTO {
  /** Список коробок. */
  boxes: EnrichedOrderBoxLayoutDTO[];
}

export type SetOrderBoxLayoutResponse = ApiResponse & {
  /** Распределение товаров по коробкам. */
  result?: OrderBoxesLayoutDTO;
};

/** Список заказов. */
export interface UpdateExternalOrderIdRequest {
  /**
   * Внешний идентификатор заказа.
   * @minLength 1
   */
  externalOrderId: string;
}

/** Статус проверки УИНа. */
export interface UinDTO {
  /** УИН товара. */
  value: string;
  /**
   * Статус проверки УИНа:
   *
   * * `FAILED` — не прошел проверку.
   *
   * * `IN_PROGRESS` — в процессе проверки.
   *
   * * `NOT_ON_VALIDATION` — УИН не отправлен на проверку или переданы не все УИНы в заказе.
   *
   * * `OK` — проверка успешно пройдена.
   */
  status: UinStatusType;
}

/** Идентификатор товара и статус проверки его УИНа. */
export interface OrderItemValidationStatusDTO {
  /**
   * Идентификатор товара в заказе.
   * @format int64
   */
  id: number;
  /** Статусы проверки УИНов. */
  uin: UinDTO[];
}

/** Список идентификаторов товаров и статусы проверки УИНов. */
export interface GetOrderIdentifiersStatusDTO {
  /** Список идентификаторов товаров и статусы проверки УИНов. */
  items: OrderItemValidationStatusDTO[];
}

export type GetOrderIdentifiersStatusResponse = ApiResponse & {
  /** Список идентификаторов товаров и статусы проверки УИНов. */
  result?: GetOrderIdentifiersStatusDTO;
};

/** Информация о новой дате доставки заказа. */
export interface OrderDeliveryDateDTO {
  /**
   * Новая дата доставки заказа.
   *
   * Формат даты: `ГГГГ-ММ-ДД`.
   * @format date
   */
  toDate: string;
}

export interface SetOrderDeliveryDateRequest {
  /** Информация о новой дате доставки заказа. */
  dates: OrderDeliveryDateDTO;
  /** Причина переноса доставки заказа. */
  reason: OrderDeliveryDateReasonType;
}

export interface SetOrderDeliveryTrackCodeRequest {
  /** Трек‑номер посылки. */
  trackCode: string;
  /**
   * Идентификатор службы доставки. Информацию о службе доставки можно получить с помощью запроса [GET delivery/services](../../reference/orders/getDeliveryServices.md).
   * @format int64
   */
  deliveryServiceId: number;
}

/** Информация о покупателе и его номере телефона. */
export type OrderBuyerInfoDTO = OrderBuyerBasicInfoDTO & {
  /**
   * Подменный номер телефона покупателя. Подробнее о таких номерах читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/orders/dbs/call#fake-number).
   *
   * Формат номера: `+<код_страны><код_региона><номер_телефона>`.
   */
  phone?: string;
  /**
   * Проверенный покупатель.
   *
   * Если параметр `trusted` вернулся со значением `true`, Маркет уже проверил покупателя — не звоните ему. Обработайте заказ как обычно и передайте его курьеру или отвезите в ПВЗ.
   *
   * При необходимости свяжитесь с покупателем в чате. [Как это сделать](../../step-by-step/chats.md)
   *
   * Подробнее о звонках покупателю читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/dbs/call).
   */
  trusted?: boolean;
};

export type GetOrderBuyerInfoResponse = ApiResponse & {
  /** Информация о покупателе и его номере телефона. */
  result?: OrderBuyerInfoDTO;
};

export interface VerifyOrderEacRequest {
  /** Код для подтверждения ЭАПП. */
  code: string;
}

/** Результат выполнения запроса. */
export interface EacVerificationResultDTO {
  /** Статус проверки кода подтверждения. */
  verificationResult?: EacVerificationStatusType;
  /**
   * Количество оставшихся попыток проверки кода.
   *
   * Возвращается, если магазин отправил некорректный код.
   *
   * Когда все попытки будут исчерпаны, код обновится.
   * @format int32
   */
  attemptsLeft?: number;
}

export type VerifyOrderEacResponse = ApiResponse & {
  /** Результат выполнения запроса. */
  result?: EacVerificationResultDTO;
};

/** Запрос на обновление срока хранения заказа в ПВЗ. */
export interface UpdateOrderStorageLimitRequest {
  /**
   * Новая дата, до которой заказ будет храниться в пункте выдачи.
   *
   * Срок хранения можно увеличить не больше, чем на 30 дней.
   *
   * Формат даты: `ГГГГ-ММ-ДД`.
   * @format date
   */
  newDate: string;
}

/** Информация о ярлыке для коробки. */
export interface ParcelBoxLabelDTO {
  /** Соответствует :no-translate[URL], по которому выполняется запрос [GET campaigns/{campaignId}/orders/{orderId}/delivery/shipments/{shipmentId}/boxes/{boxId}/label](../../reference/orders/generateOrderLabel.md). */
  url: string;
  /** Юридическое название магазина. */
  supplierName: string;
  /** Юридическое название службы доставки. */
  deliveryServiceName: string;
  /**
   * Идентификатор заказа в системе Маркета.
   * @format int64
   */
  orderId: number;
  /**
   * Идентификатор заказа в информационной системе магазина.
   *
   * Совпадает с `orderId`, если Маркету неизвестен номер заказа в системе магазина.
   */
  orderNum: string;
  /** Фамилия и инициалы получателя заказа. */
  recipientName: string;
  /**
   * Идентификатор коробки.
   * @format int64
   */
  boxId: number;
  /**
   * Идентификатор коробки в информационной системе магазина.
   *
   * Возвращается в формате: `номер заказа на Маркете-номер коробки`. Например, `7206821‑1`, `7206821‑2` и т. д.
   */
  fulfilmentId: string;
  /** Номер коробки в заказе. Возвращается в формате: `номер места/общее количество мест`. */
  place: string;
  /**
   * Общая масса всех товаров в заказе.
   *
   * Возвращается в формате: :no-translate[`weight кг`].
   * @deprecated
   */
  weight: string;
  /** Идентификатор службы доставки. Информацию о службе доставки можно получить с помощью запроса [GET delivery/services](../../reference/orders/getDeliveryServices.md). */
  deliveryServiceId: string;
  /** Адрес получателя. */
  deliveryAddress?: string;
  /** Дата отгрузки в формате `dd.MM.yyyy`. */
  shipmentDate?: string;
}

/** Данные для печати ярлыка. */
export interface OrderLabelDTO {
  /**
   * Идентификатор заказа.
   * @format int64
   */
  orderId: number;
  /**
   * Количество коробок в заказе.
   * @format int32
   */
  placesNumber: number;
  /**
   * URL файла с ярлыками‑наклейками на все коробки в заказе.
   *
   * Соответствует URL, по которому выполняется запрос [GET campaigns/{campaignId}/orders/{orderId}/delivery/labels](../../reference/orders/generateOrderLabels.md).
   * @deprecated
   */
  url: string;
  /** Информация на ярлыке. */
  parcelBoxLabels: ParcelBoxLabelDTO[];
}

/** Ответ с информацией для печати ярлыков. */
export type GetOrderLabelsDataResponse = ApiResponse & {
  /** Данные для печати ярлыка. */
  result?: OrderLabelDTO;
};

/** Информация о покупателе. */
export interface OrderBusinessBuyerDTO {
  /** ИНН. */
  inn?: string;
  /** КПП. */
  kpp?: string;
  /** Наименование юридического лица. */
  organizationName?: string;
  /** Юридический адрес. */
  organizationJurAddress?: string;
}

export type GetBusinessBuyerInfoResponse = ApiResponse & {
  /** Информация о покупателе. */
  result?: OrderBusinessBuyerDTO;
};

/** Информация о документе. */
export interface DocumentDTO {
  /** Статус документа. */
  status?: OrderDocumentStatusType;
  /** Номер документа. */
  number?: string;
  /**
   * Дата создания документа.
   * @format date
   */
  date?: string;
}

/** Информация о документах. */
export interface OrderBusinessDocumentsDTO {
  /** Информация об УПД-1 или УПД-2. */
  upd?: DocumentDTO;
  /** Информация об УКД-1 или УКД-2. */
  ukd?: DocumentDTO;
  /** Информация о товарной накладной. */
  torgTwelve?: DocumentDTO;
  /** Информация о счете-фактуре. */
  sf?: DocumentDTO;
  /** Информация о корректировочном счете-фактуре. */
  ksf?: DocumentDTO;
}

export type GetBusinessDocumentsInfoResponse = ApiResponse & {
  /** Информация о документах. */
  result?: OrderBusinessDocumentsDTO;
};

/** Адрес доставки. */
export interface PickupAddressDTO {
  /**
   * Страна.
   * @example "Россия"
   */
  country?: string;
  /**
   * Город.
   * @example "Москва"
   */
  city?: string;
  /**
   * Улица.
   * @example "Стрелецкая улица"
   */
  street?: string;
  /**
   * Номер дома.
   * @example "9к2"
   */
  house?: string;
  /**
   * Почтовый индекс.
   * @example 123518
   */
  postcode?: string;
}

/** Описание пункта вывоза для возврата. */
export interface LogisticPickupPointDTO {
  /**
   * Идентификатор пункта вывоза.
   * @deprecated
   * @format int64
   */
  id?: number;
  /** Название пункта вывоза. */
  name?: string;
  /** Адрес пункта вывоза. */
  address?: PickupAddressDTO;
  /** Дополнительные инструкции к вывозу. */
  instruction?: string;
  /** Тип логистической точки. */
  type?: LogisticPointType;
  /**
   * Идентификатор логистического партнера, к которому относится логистическая точка.
   * @format int64
   */
  logisticPartnerId?: number;
}

/** Валюта и ее значение. */
export interface CurrencyValueDTO {
  /** Значение. */
  value: number;
  /** Валюта. */
  currencyId: CurrencyType;
}

/**
 * Идентификатор карточки товара на Маркете.
 * @format int64
 * @min 1
 */
export type MarketSku = number;

/** Решения по возвратам. */
export interface ReturnDecisionDTO {
  /**
   * Идентификатор товара в возврате.
   * @format int64
   */
  returnItemId?: number;
  /**
   * Количество единиц товара.
   * @format int32
   */
  count?: number;
  /** Комментарий. */
  comment?: string;
  /**
   * Причины возврата:
   *
   * * `BAD_QUALITY` — бракованный товар (есть недостатки).
   *
   * * `DOES_NOT_FIT` — товар не подошел.
   *
   * * `WRONG_ITEM` — привезли не тот товар.
   *
   * * `DAMAGE_DELIVERY` — товар поврежден при доставке.
   *
   * * `LOYALTY_FAIL` — невозможно установить виновного в браке/пересорте.
   *
   * * `CONTENT_FAIL` — ошибочное описание товара по вине Маркета.
   *
   * * `DELIVERY_FAIL` — товар не привезли.
   *
   * * `UNKNOWN` — причина не известна.
   */
  reasonType?: ReturnDecisionReasonType;
  /**
   * Детали причин возврата:
   *   * `DOES_NOT_FIT`:
   *     * `USER_DID_NOT_LIKE` — товар не понравился.
   *     * `USER_CHANGED_MIND` — передумал покупать.
   *     * `DELIVERED_TOO_LONG` — передумал покупать из-за длительного срока доставки.
   *
   *   * `BAD_QUALITY`:
   *     * `BAD_PACKAGE` — заводская упаковка повреждена.
   *     * `DAMAGED` — царапины, сколы.
   *     * `NOT_WORKING` — не включается, не работает.
   *     * `INCOMPLETENESS` — некомплект (не хватает детали в наборе, к товару).
   *     * `WRAPPING_DAMAGED` — транспортная упаковка повреждена.
   *     * `ITEM_WAS_USED` — следы использования на товаре.
   *     * `BROKEN` — товар разбит.
   *     * `BAD_FLOWERS` — некачественные цветы.
   *
   *   * `WRONG_ITEM`:
   *     * `WRONG_ITEM` — не тот товар.
   *     * `WRONG_COLOR` — цвет не соответствует заявленному.
   *     * `DID_NOT_MATCH_DESCRIPTION` — описание или характеристики не соответствуют заявленным.
   *     * `WRONG_ORDER` — доставили чужой заказ.
   *     * `WRONG_AMOUNT_DELIVERED` — неверное количество товара.
   *     * `PARCEL_MISSING` — часть заказа отсутствует.
   *     * `INCOMPLETE` — заказ не привезли полностью.
   *
   *   * `UNKNOWN` — детали причины не указаны.
   */
  subreasonType?: ReturnDecisionSubreasonType;
  /**
   * Решение по возврату:
   *
   * * `FAST_REFUND_MONEY` — вернуть покупателю деньги без возврата товара.
   *
   * * `REFUND_MONEY` — вернуть покупателю деньги за товар.
   *
   * * `REFUND_MONEY_INCLUDING_SHIPMENT` — вернуть покупателю деньги за товар и обратную пересылку.
   *
   * * `REPAIR` — отремонтировать товар.
   *
   * * `REPLACE` — заменить товар.
   *
   * * `SEND_TO_EXAMINATION` — взять товар на экспертизу.
   *
   * * `DECLINE_REFUND` — отказать в возврате.
   *
   * * `OTHER_DECISION` — другое решение.
   *
   * * `UNKNOWN` — не указано.
   */
  decisionType?: ReturnDecisionType;
  /**
   * {% note warning "Вместо него используйте `amount`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Сумма возврата в копейках.
   * @deprecated
   * @format int64
   */
  refundAmount?: number;
  /** Сумма возврата. */
  amount?: CurrencyValueDTO;
  /**
   * {% note warning "Вместо него используйте `partnerCompensationAmount`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Компенсация за обратную доставку в копейках.
   * @deprecated
   * @format int64
   */
  partnerCompensation?: number;
  /** Компенсация за обратную доставку. */
  partnerCompensationAmount?: CurrencyValueDTO;
  /**
   * Список хеш-кодов фотографий товара от покупателя.
   * @minItems 1
   * @uniqueItems true
   */
  images?: string[] | null;
}

/** Логистическая информация по возврату. */
export interface ReturnInstanceDTO {
  /** Тип остатка на складе. */
  stockType?: ReturnInstanceStockType;
  /** Логистический статус конкретного товара. */
  status?: ReturnInstanceStatusType;
  /** Код идентификации единицы товара в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) или [:no-translate[«ASL BELGISI»]](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]). */
  cis?: string;
  /** Международный идентификатор мобильного оборудования. */
  imei?: string;
}

/** Информация о трек-номерах. */
export interface TrackDTO {
  /** Трек-код почтового отправления. */
  trackCode?: string;
}

/** Список товаров в невыкупе или возврате. */
export interface ReturnItemDTO {
  /** Идентификатор карточки товара на Маркете. */
  marketSku?: MarketSku;
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  shopSku: ShopSku;
  /**
   * Количество единиц товара.
   * @format int64
   */
  count: number;
  /**
   * Список решений по возврату.
   * @minItems 1
   */
  decisions?: ReturnDecisionDTO[] | null;
  /**
   * Список логистических позиций возврата.
   * @minItems 1
   */
  instances?: ReturnInstanceDTO[] | null;
  /**
   * Список трек-кодов для почтовых отправлений.
   * @minItems 1
   */
  tracks?: TrackDTO[] | null;
}

/**
 * Невыкуп или возврат в заказе.
 *
 * Параметров `logisticPickupPoint`, `shipmentRecipientType` и `shipmentStatus` может не быть в случае возврата:
 *   * С опцией **Быстрый возврат денег за дешевый брак**, когда товар остается у покупателя (`fastReturn=true`).
 *   * По заказу от бизнеса, если:
 *     * статус возврата `STARTED_BY_USER` или `WAITING_FOR_DECISION`;
 *     * возврат отменен до передачи товара.
 *
 * Статус возврата денег `refundStatus` актуален только для `returnType=RETURN`.
 */
export interface ReturnDTO {
  /**
   * Идентификатор невыкупа или возврата.
   * @format int64
   */
  id: number;
  /**
   * Номер заказа.
   * @format int64
   */
  orderId: number;
  /**
   * Дата создания невыкупа или возврата клиентом.
   *
   * Формат даты: :no-translate[ISO 8601] со смещением относительно :no-translate[UTC].
   * @format date-time
   * @example "2020-02-02T14:30:30+03:00"
   */
  creationDate?: string;
  /**
   * Дата обновления невыкупа или возврата.
   *
   * Формат даты: :no-translate[ISO 8601] со смещением относительно :no-translate[UTC].
   * @format date-time
   * @example "2020-02-02T14:30:30+03:00"
   */
  updateDate?: string;
  /**
   * Статус возврата денег:
   *
   * * `STARTED_BY_USER` — создан клиентом из личного кабинета.
   *
   * * `REFUND_IN_PROGRESS` — ждет решение о возврате денег.
   *
   * * `REFUNDED` — деньги возвращены.
   *
   * * `FAILED` — невозможно провести возврат покупателю.
   *
   * * `WAITING_FOR_DECISION` — ожидает решения (:no-translate[DBS]).
   *
   * * `DECISION_MADE` — по возврату принято решение (:no-translate[DBS]).
   *
   * * `REFUNDED_WITH_BONUSES` — возврат осуществлен баллами Плюса или промокодом.
   *
   * * `REFUNDED_BY_SHOP` — магазин сделал самостоятельно возврат денег.
   *
   * * `COMPLETE_WITHOUT_REFUND` — возврат денег не требуется.
   *
   * * `CANCELLED` — возврат отменен.
   *
   * * `REJECTED` — возврат отклонен модерацией или в ПВЗ.
   *
   * * `PREMODERATION_DISPUTE` — по возврату открыт спор (:no-translate[FBS] и Экспресс).
   *
   * * `PREMODERATION_DECISION_WAITING` — ожидает решения (:no-translate[FBS] и Экспресс).
   *
   * * `PREMODERATION_DECISION_MADE` — по возврату принято решение (:no-translate[FBS] и Экспресс).
   *
   * * `PREMODERATION_SELECT_DELIVERY` — пользователь выбирает способ доставки (:no-translate[FBS] и Экспресс).
   *
   * * `UNKNOWN` — неизвестный статус.
   */
  refundStatus?: RefundStatusType;
  /** Пункт вывоза. */
  logisticPickupPoint?: LogisticPickupPointDTO;
  /** Способ возврата товара покупателем. */
  shipmentRecipientType?: RecipientType;
  /** Статус передачи возврата. */
  shipmentStatus?: ReturnShipmentStatusType;
  /**
   * {% note warning "Вместо него используйте `amount`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Сумма возврата в копейках.
   * @deprecated
   * @format int64
   */
  refundAmount?: number;
  /** Сумма возврата. */
  amount?: CurrencyValueDTO;
  /** Список товаров в невыкупе или возврате. */
  items: ReturnItemDTO[];
  /** Тип возврата. */
  returnType: ReturnType;
  /**
   * Используется ли опция **Быстрый возврат денег за дешевый брак**.
   *
   * Актуально только для `returnType=RETURN`.
   */
  fastReturn?: boolean;
}

/** Невыкупы или возвраты. */
export interface PagedReturnsDTO {
  /** Информация о страницах с результатами. */
  paging?: ForwardScrollingPagerDTO;
  /** Список невыкупов или возвратов. */
  returns: ReturnDTO[];
}

export type GetReturnsResponse = ApiResponse & {
  /** Невыкупы или возвраты. */
  result?: PagedReturnsDTO;
};

export type GetReturnResponse = ApiResponse & {
  /**
   * Невыкуп или возврат в заказе.
   *
   * Параметров `logisticPickupPoint`, `shipmentRecipientType` и `shipmentStatus` может не быть в случае возврата:
   *   * С опцией **Быстрый возврат денег за дешевый брак**, когда товар остается у покупателя (`fastReturn=true`).
   *   * По заказу от бизнеса, если:
   *     * статус возврата `STARTED_BY_USER` или `WAITING_FOR_DECISION`;
   *     * возврат отменен до передачи товара.
   *
   * Статус возврата денег `refundStatus` актуален только для `returnType=RETURN`.
   */
  result?: ReturnDTO;
};

/**
 * Идентификатор товара в возврате.
 * @format int64
 */
export type ReturnItemId = number;

/**
 * Комментарий к решению. Укажите:
 *
 * * для `REFUND_MONEY_INCLUDING_SHIPMENT`— стоимость обратной пересылки.
 *
 * * для `REPAIR` — когда вы устраните недостатки товара.
 *
 * * для `DECLINE_REFUND` — причину отказа.
 *
 * * для `OTHER_DECISION` — какое решение вы предлагаете.
 */
export type ReturnItemDecisionComment = string;

/**
 * Решения по товару в возврате.
 * @example {"returnItemId":1,"decisionType":"REFUND_MONEY_INCLUDING_SHIPMENT","comment":"Вернуть 149 рублей за пересылку."}
 */
export interface SetReturnDecisionRequest {
  /** Идентификатор товара в возврате. */
  returnItemId: ReturnItemId;
  /** Решение по товару в возврате. */
  decisionType: ReturnRequestDecisionType;
  /**
   * Комментарий к решению. Укажите:
   *
   * * для `REFUND_MONEY_INCLUDING_SHIPMENT`— стоимость обратной пересылки.
   *
   * * для `REPAIR` — когда вы устраните недостатки товара.
   *
   * * для `DECLINE_REFUND` — причину отказа.
   *
   * * для `OTHER_DECISION` — какое решение вы предлагаете.
   */
  comment?: ReturnItemDecisionComment;
}

/** Решения по товару в возврате. */
export interface ReturnItemDecisionDTO {
  /** Идентификатор товара в возврате. */
  returnItemId: ReturnItemId;
  /** Решение по товару в возврате. */
  decisionType: ReturnRequestDecisionType;
  /** Причина отказа. */
  decisionReasonType?: ReturnRequestDecisionReasonType;
  /**
   * Комментарий к решению. Укажите:
   *
   * * для `REFUND_MONEY_INCLUDING_SHIPMENT`— стоимость обратной пересылки.
   *
   * * для `REPAIR` — когда вы устраните недостатки товара.
   *
   * * для `DECLINE_REFUND` — причину отказа.
   *
   * * для `OTHER_DECISION` — какое решение вы предлагаете.
   */
  comment?: ReturnItemDecisionComment;
}

/** Запрос на подтверждение решения по возврату. */
export interface SubmitReturnDecisionRequest {
  /**
   * Решения по товарам в возврате.
   * @minItems 1
   */
  returnItemDecisions: ReturnItemDecisionDTO[];
}

export interface GetRegionsResponse {
  /** Регион доставки. */
  regions: RegionDTO[];
  /** Идентификатор следующей страницы. */
  paging?: ForwardScrollingPagerDTO;
}

export interface GetRegionWithChildrenResponse {
  /** Модель для пагинации. */
  pager?: FlippingPagerDTO;
  /** Регион доставки. */
  regions?: RegionDTO;
}

/** Страна и ее код в формате :no-translate[ISO 3166-1 alpha-2]. */
export interface CountryDTO {
  /** Регион доставки. */
  region: RegionDTO;
  /** Страна производства в формате ISO 3166-1 alpha-2. [Как получить](../../reference/regions/getRegionsCodes.md) */
  countryCode: CountryCode;
}

export interface GetRegionsCodesResponse {
  /** Список стран с их кодами в формате :no-translate[ISO 3166-1 alpha-2]. */
  countries: CountryDTO[];
}

/** Данные о складе отправления. */
export interface PartnerShipmentWarehouseDTO {
  /**
   * Идентификатор склада отправления.
   * @format int64
   * @min 1
   */
  id: number;
  /** Наименование склада отправления. */
  name?: string;
  /** Адрес склада отправления. */
  address?: string;
}

/** Служба доставки. */
export interface DeliveryServiceDTO {
  /**
   * Идентификатор службы доставки.
   * @format int64
   */
  id?: number;
  /** Наименование службы доставки. */
  name?: string;
}

/** Количество палет в отгрузке. */
export interface PalletsCountDTO {
  /**
   * Количество палет, которое заявил продавец.
   * @format int32
   * @min 0
   */
  planned?: number;
  /**
   * Количество палет, которое приняли в сортировочном центре.
   * @format int32
   * @min 0
   */
  fact?: number;
}

/** Информация о подписи акта приема-передачи. */
export interface SignatureDTO {
  /** Подписан ли акт приема-передачи. */
  signed: boolean;
}

/** Информация об отгрузке. */
export interface BaseShipmentDTO {
  /**
   * Идентификатор отгрузки.
   * @format int64
   * @min 1
   */
  id: number;
  /**
   * Начало планового интервала отгрузки.
   *
   * Формат даты: :no-translate[ISO 8601] со смещением относительно :no-translate[UTC].
   * @format date-time
   * @example "2017-11-21T00:00:00+03:00"
   */
  planIntervalFrom: string;
  /**
   * Конец планового интервала отгрузки.
   *
   * Формат даты: :no-translate[ISO 8601] со смещением относительно :no-translate[UTC.
   * @format date-time
   * @example "2017-11-21T00:00:00+03:00"
   */
  planIntervalTo: string;
  /** Способ отгрузки заказов. */
  shipmentType?: ShipmentType;
  /** Данные о складе отправления. */
  warehouse?: PartnerShipmentWarehouseDTO;
  /** Данные о складе назначения. */
  warehouseTo?: PartnerShipmentWarehouseDTO;
  /** Идентификатор отгрузки в вашей системе. Если вы еще не передавали идентификатор, вернется идентификатор из параметра `id`. */
  externalId?: string;
  /** Служба доставки. */
  deliveryService?: DeliveryServiceDTO;
  /** Данные о палетах в отгрузке. */
  palletsCount?: PalletsCountDTO;
  /**
   * Идентификаторы заказов в отгрузке.
   * @uniqueItems true
   */
  orderIds: number[];
  /**
   * Количество заказов, которое Маркет запланировал к отгрузке.
   * @format int32
   * @min 0
   */
  draftCount: number;
  /**
   * Количество заказов, которое Маркет подтвердил к отгрузке.
   * @format int32
   * @min 0
   */
  plannedCount: number;
  /**
   * Количество заказов, принятых в сортировочном центре или пункте приема.
   * @format int32
   * @min 0
   */
  factCount: number;
  /** Информация о подписи акта приема-передачи. */
  signature: SignatureDTO;
}

/** Статус отгрузки. */
export interface ShipmentStatusChangeDTO {
  /** Статус отгрузки. */
  status?: ShipmentStatusType;
  /** Описание статуса отгрузки. */
  description?: string;
  /**
   * Время последнего изменения статуса отгрузки.
   *
   * Формат даты: :no-translate[ISO 8601] со смещением относительно :no-translate[UTC].
   * @format date-time
   * @example "2017-11-21T00:00:00+03:00"
   */
  updateTime?: string;
}

/** Информация об отгрузке. */
export interface ExtensionShipmentDTO {
  /** Статус отгрузки. */
  currentStatus?: ShipmentStatusChangeDTO;
  /**
   * Доступные действия над отгрузкой.
   * @uniqueItems true
   */
  availableActions: ShipmentActionType[];
}

/** Информация об отгрузке. */
export type ShipmentDTO = BaseShipmentDTO & ExtensionShipmentDTO;

export type GetShipmentResponse = ApiResponse & {
  /** Информация об отгрузке. */
  result?: ShipmentDTO;
};

/** Годные/негодные ярлыки по заказам в отгрузке. */
export interface OrdersShipmentInfoDTO {
  /**
   * Идентификаторы заказов в отгрузке, для которых можно распечатать ярлыки.
   * @uniqueItems true
   */
  orderIdsWithLabels: number[];
  /**
   * Идентификаторы заказов в отгрузке, для которых нельзя распечатать ярлыки.
   * @uniqueItems true
   */
  orderIdsWithoutLabels: number[];
}

export type GetShipmentOrdersInfoResponse = ApiResponse & {
  /** Годные/негодные ярлыки по заказам в отгрузке. */
  result?: OrdersShipmentInfoDTO;
};

/** Запрос для подтверждения отгрузки. */
export interface ConfirmShipmentRequest {
  /** Идентификатор отгрузки в системе поставщика. */
  externalShipmentId?: string;
  /**
   * Логин пользователя в Яндекс ID, от имени которого будет подписываться электронный акт приема-передачи.
   *
   * Указывается без `@yandex.ru`.
   *
   * Где его найти:
   *
   * * на странице [Яндекс ID](https://id.yandex.ru);
   * * в [кабинете продавца на Маркете](https://partner.market.yandex.ru/):
   *
   *   * слева снизу под иконкой пользователя;
   *   * на странице **Настройки** → **Сотрудники и доступы**.
   */
  signatory?: string;
}

/** Запрос на передачу количества упаковок в отгрузке. */
export interface SetShipmentPalletsCountRequest {
  /**
   * Количество упаковок в отгрузке.
   * @format int32
   * @min 0
   */
  placesCount: number;
}

/** Запрос информации об отгрузках. */
export interface SearchShipmentsRequest {
  /**
   * Начальная дата для фильтрации по дате отгрузки (включительно).
   *
   * Формат даты: `ДД-ММ-ГГГГ`.
   * @format date
   */
  dateFrom: string;
  /**
   * Конечная дата для фильтрации по дате отгрузки (включительно).
   *
   * Формат даты: `ДД-ММ-ГГГГ`.
   * @format date
   */
  dateTo: string;
  /**
   * Список статусов отгрузок.
   * @minItems 1
   * @uniqueItems true
   */
  statuses?: ShipmentStatusType[] | null;
  /**
   * Список идентификаторов заказов из отгрузок.
   * @minItems 1
   * @uniqueItems true
   */
  orderIds?: number[] | null;
  /**
   * Возвращать ли отмененные заказы.
   *
   * Значение по умолчанию: `true`. Если возвращать отмененные заказы не нужно, передайте значение `false`.
   * @default true
   */
  cancelledOrders?: boolean;
}

/** Список с информацией об отгрузках. */
export type ShipmentInfoDTO = BaseShipmentDTO & {
  /** Статус отгрузки. */
  status?: ShipmentStatusType;
  /** Описание статуса отгрузки. */
  statusDescription?: string;
  /**
   * Время последнего изменения статуса отгрузки
   *
   * Формат даты: :no-translate[ISO 8601] со смещением относительно :no-translate[UTC].
   * @format date-time
   * @example "2017-11-21T00:00:00+03:00"
   */
  statusUpdateTime?: string;
};

/** Информация об отгрузках. */
export interface SearchShipmentsResponseDTO {
  /** Список с информацией об отгрузках. */
  shipments: ShipmentInfoDTO[];
  /** Страницы с результатами поиска. */
  paging?: ForwardScrollingPagerDTO;
}

/** Ответ на запрос информации об отгрузках. */
export type SearchShipmentsResponse = ApiResponse & {
  /** Информация об отгрузках. */
  result?: SearchShipmentsResponseDTO;
};

/** Запрос переноса заказов из отгрузки. */
export interface TransferOrdersFromShipmentRequest {
  /**
   * Список заказов, которые вы не успеваете подготовить.
   * @maxItems 500
   * @minItems 1
   * @uniqueItems true
   */
  orderIds: number[];
}

/** Фильтрации удаляемых товаров по offerIds. */
export interface DeleteOffersRequest {
  /**
   * Список :no-translate[SKU] товаров, которые нужно удалить.
   * @maxItems 500
   * @minItems 1
   * @uniqueItems true
   */
  offerIds: ShopSku[];
}

/** Список товаров, которые не удалось удалить, потому что они хранятся на складе Маркета. */
export interface DeleteOffersDTO {
  /**
   * Список SKU товаров, которые не удалось удалить.
   * @minItems 1
   * @uniqueItems true
   */
  notDeletedOfferIds?: ShopSku[] | null;
}

/** Результат удаления товаров. */
export type DeleteOffersResponse = ApiResponse & {
  /** Результат удаления. */
  result?: DeleteOffersDTO;
};

/** Ресурс из запроса заблокирован от применения к нему указанного метода. */
export type ApiLockedErrorResponse = ApiErrorResponse;

export interface GetOfferMappingsRequest {
  /**
   * Идентификаторы товаров, информация о которых нужна.
   *
   * {% note warning "Такой список возвращается только целиком" %}
   *
   * Если вы запрашиваете информацию по конкретным :no-translate[SKU], не заполняйте:
   * * `page_token`;
   * * `limit`;
   * * `cardStatuses`;
   * * `categoryIds`;
   * * `vendorNames`;
   * * `tags`;
   * * `archived`.
   *
   * {% endnote %}
   *
   *
   * @maxItems 200
   * @minItems 1
   * @uniqueItems true
   */
  offerIds?: ShopSku[] | null;
  /**
   * Фильтр по статусам карточек.
   *
   * [Что такое карточка товара](https://yandex.ru/support/marketplace/assortment/content/index.html)
   * @minItems 1
   * @uniqueItems true
   */
  cardStatuses?: OfferCardStatusType[] | null;
  /**
   * Фильтр по категориям на Маркете.
   * @minItems 1
   * @uniqueItems true
   */
  categoryIds?: number[] | null;
  /**
   * Фильтр по брендам.
   * @minItems 1
   * @uniqueItems true
   */
  vendorNames?: string[] | null;
  /**
   * Фильтр по тегам.
   * @minItems 1
   * @uniqueItems true
   */
  tags?: string[] | null;
  /**
   * Фильтр по нахождению в архиве.
   *
   * Передайте `true`, чтобы получить товары, находящиеся в архиве. Если фильтр не заполнен или передано `false`, в ответе возвращаются товары, не находящиеся в архиве.
   */
  archived?: boolean;
}

/** Информация о страницах результатов. */
export type ScrollingPagerDTO = ForwardScrollingPagerDTO & {
  /** Идентификатор предыдущей страницы результатов. */
  prevPageToken?: string;
};

/**
 * Составляйте название по схеме: тип + бренд или производитель + модель + особенности, если есть (например, цвет, размер или вес) и количество в упаковке.
 *
 * Не включайте в название условия продажи (например, «скидка», «бесплатная доставка» и т. д.), эмоциональные характеристики («хит», «супер» и т. д.). Не пишите слова большими буквами — кроме устоявшихся названий брендов и моделей.
 *
 * Оптимальная длина — 50–60 символов.
 *
 * [Рекомендации и правила](https://yandex.ru/support/marketplace/assortment/fields/title.html)
 * @maxLength 256
 * @example "Ударная дрель Makita HP1630, 710 Вт"
 */
export type OfferName = string;

/**
 * Идентификатор категории на Маркете, к которой вы относите свой товар.
 *
 * {% note warning "Всегда указывайте, когда передаете `parameterValues`" %}
 *
 * Если при изменении характеристик передать `parameterValues` и не указать `marketCategoryId`, характеристики обновятся, но в ответе придет предупреждение (параметр `warnings`).
 *
 * Если не передать их оба, будет использована информация из устаревших параметров `params` и `category`, а `marketCategoryId` будет определен автоматически.
 *
 * {% endnote %}
 *
 * При изменении категории убедитесь, что характеристики товара и их значения в параметре `parameterValues` вы передаете для новой категории.
 *
 * Список категорий Маркета можно получить с помощью запроса  [POST categories/tree](../../reference/categories/getCategoriesTree.md).
 * @format int64
 */
export type PartnerMarketCategoryId = number;

/**
 * {% note warning "Вместо него используйте `marketCategoryId`." %}
 *
 *
 *
 * {% endnote %}
 *
 * Категория товара в вашем магазине.
 * @deprecated
 */
export type OfferCategory = string;

/** Инструкция по использованию товара. */
export interface OfferManualDTO {
  /**
   * Ссылка на инструкцию.
   * @maxLength 512
   */
  url: string;
  /**
   * Название инструкции, которое будет отображаться на карточке товара.
   * @maxLength 200
   */
  title?: string;
}

/**
 * Название бренда или производителя. Должно быть записано так, как его пишет сам бренд.
 * @example "LEVENHUK"
 */
export type OfferVendor = string;

/**
 * Указывайте в виде последовательности цифр. Подойдут коды :no-translate[EAN-13, EAN-8, UPC-A, UPC-E] или :no-translate[Code 128].
 *
 * Для книг указывайте :no-translate[ISBN].
 *
 * Для товаров [определенных категорий и торговых марок](https://yastatic.net/s3/doc-binary/src/support/market/ru/yandex-market-list-for-gtin.xlsx) штрихкод должен быть действительным кодом :no-translate[GTIN]. Обратите внимание: внутренние штрихкоды, начинающиеся на 2 или 02, и коды формата :no-translate[Code 128] не являются :no-translate[GTIN].
 *
 * [Что такое :no-translate[GTIN]](:no-translate[*gtin])
 * @minItems 1
 * @uniqueItems true
 */
export type OfferBarcodes = string[] | null;

/**
 * Подробное описание товара: например, его преимущества и особенности.
 *
 * Не давайте в описании инструкций по установке и сборке. Не используйте слова «скидка», «распродажа», «дешевый», «подарок» (кроме подарочных категорий), «бесплатно», «акция», «специальная цена», «новинка», «new», «аналог», «заказ», «хит». Не указывайте никакой контактной информации и не давайте ссылок.
 *
 * Для форматирования текста можно использовать теги HTML:
 *
 * * \<h>, \<h1>, \<h2> и так далее — для заголовков;
 * * \<br> и \<p> — для переноса строки;
 * * \<ol> — для нумерованного списка;
 * * \<ul> — для маркированного списка;
 * * \<li> — для создания элементов списка (должен находиться внутри \<ol> или \<ul>);
 * * \<div> — поддерживается, но не влияет на отображение текста.
 *
 * Оптимальная длина — 400–600 символов.
 *
 * [Рекомендации и правила](https://yandex.ru/support/marketplace/assortment/fields/description.html)
 * @maxLength 6000
 */
export type OfferDescription = string;

/**
 * Габариты упаковки и вес товара.
 *
 * Если товар занимает несколько коробок, перед измерением размеров сложите их компактно.
 *
 * ![Схема измерения многоместных грузов](../../_images/reference/boxes-measure.png)
 */
export interface OfferWeightDimensionsDTO {
  /**
   * Длина упаковки в см.
   * @min 0
   * @exclusiveMin true
   * @example 65.55
   */
  length: number;
  /**
   * Ширина упаковки в см.
   * @min 0
   * @exclusiveMin true
   * @example 50.7
   */
  width: number;
  /**
   * Высота упаковки в см.
   * @min 0
   * @exclusiveMin true
   * @example 20
   */
  height: number;
  /**
   * Вес товара в кг с учетом упаковки (брутто).
   * @min 0
   * @exclusiveMin true
   * @example 1.001
   */
  weight: number;
}

/**
 * Артикул товара от производителя.
 * @example "VNDR-0005A"
 */
export type OfferVendorCode = string;

/** Временной отрезок с комментарием. Требования к содержанию комментария зависят от контекста использования параметра и указаны в описании поля, которое его содержит. */
export interface TimePeriodDTO {
  /** Продолжительность в указанных единицах. */
  timePeriod: number;
  /** Единица измерения. */
  timeUnit: TimeUnitType;
  /**
   * Комментарий.
   * @maxLength 500
   */
  comment?: string;
}

/** Товарный код. */
export interface CommodityCodeDTO {
  /** Товарный код. */
  code: string;
  /** Тип товарного кода. */
  type: CommodityCodeType;
}

/** Состояние уцененного товара. */
export interface OfferConditionDTO {
  /** Тип уценки. */
  type?: OfferConditionType;
  /** Внешний вид товара. */
  quality?: OfferConditionQualityType;
  /** Описание товара. Подробно опишите дефекты, насколько они заметны и где их искать. */
  reason?: string;
}

/** Возраст в заданных единицах измерения. */
export interface AgeDTO {
  /**
   * Значение.
   * @min 0
   */
  value: number;
  /** Единица измерения. */
  ageUnit: AgeUnitType;
}

/**
 * Параметры товара.
 *
 * Если у товара несколько значений одного параметра, передайте их с одним и тем же `name`, но разными `value`.
 *
 * {% cut "Пример" %}
 *
 * ```json translate=no
 * "params": [
 *   {
 *     "name": "Цвет для фильтра",
 *     "value": "Зеленый"
 *   },
 *   {
 *     "name": "Цвет для фильтра",
 *     "value": "Желтый"
 *   }
 * ]
 * ```
 *
 * {% endcut %}
 */
export interface OfferParamDTO {
  /**
   * Название характеристики.
   *
   * Должно совпадать с названием характеристики на Маркете. Узнать его можно из Excel-шаблона категории или через запрос [POST category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters.md).
   * @maxLength 200
   * @example "Wi-Fi"
   */
  name: string;
  /**
   * Значение.
   * @example "есть"
   */
  value: string;
}

/** Основные параметры товара. */
export interface BaseOfferDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /**
   * Составляйте название по схеме: тип + бренд или производитель + модель + особенности, если есть (например, цвет, размер или вес) и количество в упаковке.
   *
   * Не включайте в название условия продажи (например, «скидка», «бесплатная доставка» и т. д.), эмоциональные характеристики («хит», «супер» и т. д.). Не пишите слова большими буквами — кроме устоявшихся названий брендов и моделей.
   *
   * Оптимальная длина — 50–60 символов.
   *
   * [Рекомендации и правила](https://yandex.ru/support/marketplace/assortment/fields/title.html)
   */
  name?: OfferName;
  /**
   * Идентификатор категории на Маркете, к которой вы относите свой товар.
   *
   * {% note warning "Всегда указывайте, когда передаете `parameterValues`" %}
   *
   * Если при изменении характеристик передать `parameterValues` и не указать `marketCategoryId`, характеристики обновятся, но в ответе придет предупреждение (параметр `warnings`).
   *
   * Если не передать их оба, будет использована информация из устаревших параметров `params` и `category`, а `marketCategoryId` будет определен автоматически.
   *
   * {% endnote %}
   *
   * При изменении категории убедитесь, что характеристики товара и их значения в параметре `parameterValues` вы передаете для новой категории.
   *
   * Список категорий Маркета можно получить с помощью запроса  [POST categories/tree](../../reference/categories/getCategoriesTree.md).
   */
  marketCategoryId?: PartnerMarketCategoryId;
  /**
   * {% note warning "Вместо него используйте `marketCategoryId`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Категория товара в вашем магазине.
   */
  category?: OfferCategory;
  /**
   * Ссылки на изображения товара. Изображение по первой ссылке считается основным, остальные дополнительными.
   *
   * **Требования к ссылкам**
   *
   * * Ссылок может быть до 30.
   * * Указывайте ссылку целиком, включая протокол http или https.
   * * Максимальная длина — 512 символов.
   * * Русские буквы в URL можно.
   * * Можно использовать прямые ссылки на изображения и на Яндекс Диск. Ссылки на Яндекс Диске нужно копировать с помощью функции **Поделиться**. Относительные ссылки и ссылки на другие облачные хранилища — не работают.
   *
   * ✅ `https://example-shop.ru/images/sku12345.jpg`
   *
   * ✅ `https://yadi.sk/i/NaBoRsimVOLov`
   *
   * ❌ `/images/sku12345.jpg`
   *
   * ❌ `https://www.dropbox.com/s/818f/tovar.jpg`
   *
   * Ссылки на изображение должны быть постоянными. Нельзя использовать динамические ссылки, меняющиеся от выгрузки к выгрузке.
   *
   * Если нужно заменить изображение, выложите новое изображение по новой ссылке, а ссылку на старое удалите. Если просто заменить изображение по старой ссылке, оно не обновится.
   *
   * [Требования к изображениям](https://yandex.ru/support/marketplace/assortment/fields/images.html)
   * @maxItems 30
   * @minItems 1
   * @uniqueItems false
   */
  pictures?: string[] | null;
  /**
   * Ссылки (URL) на видео товара.
   *
   * **Требования к ссылке**
   *
   * * Указывайте ссылку целиком, включая протокол http или https.
   * * Максимальная длина — 512 символов.
   * * Русские буквы в URL можно.
   * * Можно использовать прямые ссылки на видео и на Яндекс Диск. Ссылки на Яндекс Диске нужно копировать с помощью функции **Поделиться**. Относительные ссылки и ссылки на другие облачные хранилища — не работают.
   *
   * ✅ `https://example-shop.ru/video/sku12345.avi`
   *
   * ✅ `https://yadi.sk/i/NaBoRsimVOLov`
   *
   * ❌ `/video/sku12345.avi`
   *
   * ❌ `https://www.dropbox.com/s/818f/super-tovar.avi`
   *
   * Ссылки на видео должны быть постоянными. Нельзя использовать динамические ссылки, меняющиеся от выгрузки к выгрузке.
   *
   * Если нужно заменить видео, выложите новое видео по новой ссылке, а ссылку на старое удалите. Если просто заменить видео по старой ссылке, оно не обновится.
   *
   * [Требования к видео](https://yandex.ru/support/marketplace/assortment/fields/video.html)
   * @maxItems 6
   * @minItems 1
   * @uniqueItems false
   */
  videos?: string[] | null;
  /**
   * Список инструкций по использованию товара.
   *
   * Максимальное количество инструкций — 6.
   * @maxItems 6
   * @minItems 1
   */
  manuals?: OfferManualDTO[] | null;
  /** Название бренда или производителя. Должно быть записано так, как его пишет сам бренд. */
  vendor?: OfferVendor;
  /**
   * Указывайте в виде последовательности цифр. Подойдут коды :no-translate[EAN-13, EAN-8, UPC-A, UPC-E] или :no-translate[Code 128].
   *
   * Для книг указывайте :no-translate[ISBN].
   *
   * Для товаров [определенных категорий и торговых марок](https://yastatic.net/s3/doc-binary/src/support/market/ru/yandex-market-list-for-gtin.xlsx) штрихкод должен быть действительным кодом :no-translate[GTIN]. Обратите внимание: внутренние штрихкоды, начинающиеся на 2 или 02, и коды формата :no-translate[Code 128] не являются :no-translate[GTIN].
   *
   * [Что такое :no-translate[GTIN]](:no-translate[*gtin])
   *
   */
  barcodes?: OfferBarcodes;
  /**
   * Подробное описание товара: например, его преимущества и особенности.
   *
   * Не давайте в описании инструкций по установке и сборке. Не используйте слова «скидка», «распродажа», «дешевый», «подарок» (кроме подарочных категорий), «бесплатно», «акция», «специальная цена», «новинка», «new», «аналог», «заказ», «хит». Не указывайте никакой контактной информации и не давайте ссылок.
   *
   * Для форматирования текста можно использовать теги HTML:
   *
   * * \<h>, \<h1>, \<h2> и так далее — для заголовков;
   * * \<br> и \<p> — для переноса строки;
   * * \<ol> — для нумерованного списка;
   * * \<ul> — для маркированного списка;
   * * \<li> — для создания элементов списка (должен находиться внутри \<ol> или \<ul>);
   * * \<div> — поддерживается, но не влияет на отображение текста.
   *
   * Оптимальная длина — 400–600 символов.
   *
   * [Рекомендации и правила](https://yandex.ru/support/marketplace/assortment/fields/description.html)
   */
  description?: OfferDescription;
  /**
   * Страна, где был произведен товар.
   *
   * Записывайте названия стран так, как они записаны в [списке](https://yastatic.net/s3/doc-binary/src/support/market/ru/countries.xlsx).
   * @minItems 1
   * @uniqueItems true
   */
  manufacturerCountries?: string[] | null;
  /** Габариты упаковки и вес товара. */
  weightDimensions?: OfferWeightDimensionsDTO;
  /** Артикул товара от производителя. */
  vendorCode?: OfferVendorCode;
  /**
   * Метки товара, которые использует магазин. Покупателям теги не видны. По тегам можно группировать и фильтровать разные товары в каталоге — например, товары одной серии, коллекции или линейки.
   *
   * Максимальная длина тега — 20 символов. У одного товара может быть максимум 10 тегов.
   * @maxItems 50
   * @minItems 1
   * @uniqueItems true
   */
  tags?: string[] | null;
  /**
   * Срок годности — период, по прошествии которого товар становится непригоден.
   *
   * Указывайте срок, указанный на банке или упаковке. Текущая дата, дата поставки или дата отгрузки значения не имеет.
   *
   * Обязательно указывайте срок, если он есть.
   *
   * В комментарии укажите условия хранения. Например, `Хранить в сухом помещении`.
   */
  shelfLife?: TimePeriodDTO;
  /**
   * Срок службы — период, в течение которого товар должен исправно выполнять свою функцию.
   *
   * Обязательно указывайте срок, если он есть.
   *
   * В комментарии укажите условия хранения. Например, `Использовать при температуре не ниже −10 градусов`.
   */
  lifeTime?: TimePeriodDTO;
  /**
   * Гарантийный срок — период, в течение которого можно заменить или починить товар без дополнительной платы.
   *
   * Обязательно указывайте срок, если он есть.
   *
   * В комментарии опишите особенности гарантийного обслуживания. Например, `Гарантия на аккумулятор — 6 месяцев`.
   */
  guaranteePeriod?: TimePeriodDTO;
  /**
   * {% note warning "Вместо него используйте `commodityCodes` с типом `CUSTOMS_COMMODITY_CODE`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Код товара в единой Товарной номенклатуре внешнеэкономической деятельности (ТН ВЭД) — 10 или 14 цифр без пробелов.
   *
   * Обязательно укажите, если он есть.
   * @deprecated
   * @example 8517610008
   */
  customsCommodityCode?: string;
  /**
   * Товарные коды.
   * @minItems 1
   */
  commodityCodes?: CommodityCodeDTO[] | null;
  /**
   * Номера документов на товар: сертификата, декларации соответствия и т. п.
   *
   * Передавать можно только номера документов, сканы которого загружены в кабинете продавца по [инструкции](https://yandex.ru/support/marketplace/assortment/restrictions/certificates.html).
   * @maxItems 6
   * @minItems 1
   * @uniqueItems true
   */
  certificates?: string[] | null;
  /**
   * Количество грузовых мест.
   *
   * Параметр используется, если товар представляет собой несколько коробок, упаковок и так далее. Например, кондиционер занимает два места — внешний и внутренний блоки в двух коробках.
   *
   * Для товаров, занимающих одно место, не передавайте этот параметр.
   * @format int32
   * @min 2
   */
  boxCount?: number;
  /**
   * Состояние уцененного товара.
   *
   * Используется только для товаров, продаваемых с уценкой.
   *
   * [Правила продажи уцененных товаров](https://yandex.ru/support/marketplace/assortment/restrictions/used-goods.html)
   */
  condition?: OfferConditionDTO;
  /**
   * Особый тип товара. Указывается, если товар:
   *
   * * имеет особый тип, который хотите убрать;
   * * лекарство;
   * * бумажная или электронная книга;
   * * аудиокнига;
   * * музыка или видео;
   * * изготовляется на заказ;
   * * алкоголь.
   */
  type?: OfferType;
  /**
   * Признак цифрового товара. Укажите `true`, если товар доставляется по электронной почте.
   *
   * [Как работать с цифровыми товарами](../../step-by-step/digital.md)
   */
  downloadable?: boolean;
  /** Параметр включает для товара пометку 18+. Устанавливайте ее только для товаров, которые относятся к удовлетворению сексуальных потребностей. */
  adult?: boolean;
  /**
   * Если товар не предназначен для детей младше определенного возраста, укажите это.
   *
   * Возрастное ограничение можно задавать в годах (с нуля, с 6, 12, 16 или 18) или в месяцах (любое число от 0 до 12).
   */
  age?: AgeDTO;
  /**
   * {% note warning "При передаче характеристик используйте `parameterValues`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Характеристики, которые есть только у товаров конкретной категории — например, диаметр колес велосипеда или материал подошвы обуви.
   * @deprecated
   * @maxItems 600
   * @minItems 1
   */
  params?: OfferParamDTO[] | null;
}

/** Цена на товар. */
export interface BasePriceDTO {
  /**
   * Цена товара.
   * @min 0
   * @exclusiveMin true
   */
  value: number;
  /** Валюта. */
  currencyId: CurrencyType;
}

/** Цена с указанием скидки. */
export type PriceWithDiscountDTO = BasePriceDTO & {
  /**
   * Зачеркнутая цена.
   *
   * Число должно быть целым. Вы можете указать цену со скидкой от 5 до 99%.
   *
   * Передавайте этот параметр при каждом обновлении цены, если предоставляете скидку на товар.
   * @min 0
   * @exclusiveMin true
   */
  discountBase?: number;
};

/** Время последнего обновления. */
export interface UpdateTimeDTO {
  /**
   * Время последнего обновления.
   * @format date-time
   */
  updatedAt: string;
}

/** Цена с указанием валюты, скидки и времени последнего обновления. */
export type GetPriceWithDiscountDTO = PriceWithDiscountDTO & UpdateTimeDTO;

/** Цена с указанием времени последнего обновления. */
export type GetPriceDTO = BasePriceDTO & UpdateTimeDTO;

/** Статус товара в магазине. */
export interface OfferCampaignStatusDTO {
  /**
   * Идентификатор кампании.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   */
  campaignId: number;
  /** Статус товара. */
  status: OfferCampaignStatusType;
}

/** Информация о том, по каким моделям можно продавать товар, а по каким нельзя. */
export interface OfferSellingProgramDTO {
  /** Модель размещения. */
  sellingProgram: SellingProgramType;
  /** Информация о том, можно ли по этой модели продавать товар. */
  status: OfferSellingProgramStatusType;
}

/** Информация о медиафайле товара. */
export interface OfferMediaFileDTO {
  /** Ссылка на медиафайл. */
  url?: string;
  /** Название медиафайла. */
  title?: string;
  /** Состояние загрузки медиафайла. */
  uploadState?: MediaFileUploadStateType;
}

/** Информация о медиафайлах товара. */
export interface OfferMediaFilesDTO {
  /**
   * Использовать первое видео в карточке как видеообложку.
   *
   * Передайте `true`, чтобы первое видео использовалось как видеообложка, или `false`, чтобы видеообложка не отображалась в карточке товара.
   * @deprecated
   */
  firstVideoAsCover?: boolean;
  /**
   * Видеофайлы товара.
   * @minItems 1
   */
  videos?: OfferMediaFileDTO[] | null;
  /**
   * Изображения товара.
   * @minItems 1
   */
  pictures?: OfferMediaFileDTO[] | null;
  /**
   * Руководства по использованию товара.
   * @minItems 1
   */
  manuals?: OfferMediaFileDTO[] | null;
}

/** Параметры товара. */
export type GetOfferDTO = BaseOfferDTO & {
  /** Цена. */
  basicPrice?: GetPriceWithDiscountDTO;
  /** Себестоимость — затраты на самостоятельное производство товара или закупку у производителя или поставщиков. */
  purchasePrice?: GetPriceDTO;
  /** Дополнительные расходы на товар. Например, на доставку или упаковку. */
  additionalExpenses?: GetPriceDTO;
  /** Статус карточки товара. */
  cardStatus?: OfferCardStatusType;
  /**
   * Список магазинов, в которых размещен товар.
   * @minItems 1
   */
  campaigns?: OfferCampaignStatusDTO[] | null;
  /**
   * Информация о том, какие для товара доступны модели размещения.
   * @minItems 1
   */
  sellingPrograms?: OfferSellingProgramDTO[] | null;
  /** Информация о медиафайлах товара. */
  mediaFiles?: OfferMediaFilesDTO;
  /** Товар помещен в архив. */
  archived?: boolean;
};

/**
 * Карточка на Маркете, которая, с вашей точки зрения, подходит товару. Чтобы определить идентификатор подходящей карточки, воспользуйтесь поиском в кабинете (**Товары** → **Каталог** → **Загрузить товары**).
 *
 * По результатам проверки Маркет может привязать товар к более подходящей карточке.
 */
export interface UpdateMappingDTO {
  /** Идентификатор карточки на Маркете. */
  marketSku?: MarketSku;
}

/** Информация о товарах в каталоге. */
export type GetMappingDTO = UpdateMappingDTO & {
  /**
   * Название карточки товара.
   *
   * Может отсутствовать в ответе, если товар еще не привязан к карточке.
   */
  marketSkuName?: string;
  /**
   * Идентификатор модели на Маркете.
   *
   * Может отсутствовать в ответе, если товар еще не привязан к карточке.
   * @deprecated
   * @format int64
   */
  marketModelId?: number;
  /**
   * Название модели на Маркете.
   *
   * Может отсутствовать в ответе, если товар еще не привязан к карточке.
   * @deprecated
   */
  marketModelName?: string;
  /**
   * Идентификатор категории на Маркете, в которую попал товар.
   *
   * Может отсутствовать в ответе, если Маркет еще не определил категорию товара.
   * @format int64
   */
  marketCategoryId?: number;
  /**
   * Название категории карточки на Маркете.
   *
   * Может отсутствовать в ответе, если Маркет еще не определил категорию товара.
   */
  marketCategoryName?: string;
};

/** Информация о товаре. */
export interface GetOfferMappingDTO {
  /** Основные параметры товара. */
  offer?: GetOfferDTO;
  /** Информация о карточке товара на Маркете. */
  mapping?: GetMappingDTO;
}

/** Информация о товарах. */
export interface GetOfferMappingsResultDTO {
  /** Идентификатор следующей страницы. */
  paging?: ScrollingPagerDTO;
  /** Информация о товарах. */
  offerMappings: GetOfferMappingDTO[];
}

export type GetOfferMappingsResponse = ApiResponse & {
  /** Информация о товарах. */
  result?: GetOfferMappingsResultDTO;
};

/**
 * Значение характеристики.
 *
 * Вы можете указывать несколько значений одной характеристики при условии, что:
 *
 * * Тип характеристики — `ENUM`.
 * * В ответе на запрос [POST category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters.md) у данной характеристики поле `multivalue` имеет значение `true`.
 *
 * Для этого в `parameterValues` передавайте каждое значение отдельно — несколько объектов с параметрами `parameterId`, `valueId` и `value`. Параметр `parameterId` должен быть одинаковым.
 */
export interface ParameterValueDTO {
  /**
   * Идентификатор характеристики.
   * @format int64
   * @min 1
   */
  parameterId: number;
  /**
   * Идентификатор единицы измерения. Если вы не передали параметр `unitId`, используется единица измерения по умолчанию.
   * @format int64
   */
  unitId?: number;
  /**
   * Идентификатор значения.
   *
   * Обязательно указывайте идентификатор, если передаете значение из перечня допустимых значений, полученного от Маркета.
   *
   * Передавайте вместе с `value`.
   *
   * Только для характеристик типа `ENUM`.
   * @format int64
   */
  valueId?: number;
  /**
   * Значение.
   *
   * Для характеристик типа `ENUM` передавайте вместе с `valueId`.
   */
  value?: string;
}

/** Параметры товара. */
export type UpdateOfferDTO = BaseOfferDTO & {
  /**
   * Список характеристик с их значениями.
   *
   * {% note warning "Всегда передавайте вместе с `marketCategoryId`" %}
   *
   * Если не передать `marketCategoryId` при изменении характеристик, они обновятся, но в ответе придет предупреждение (параметр `warnings`).
   *
   * Если не передать их оба, будет использована информация из устаревших параметров `params` и `category`, а `marketCategoryId` будет определен автоматически.
   *
   * {% endnote %}
   *
   * При **изменении** характеристик передавайте только те, значение которых нужно обновить. Если в `marketCategoryId` вы меняете категорию, значения общих характеристик для старой и новой категории сохранятся, передавать их не нужно.
   *
   * Чтобы **удалить** значение заданной характеристики, передайте ее `parameterId` с пустым `value`.
   * @maxItems 300
   * @minItems 1
   */
  parameterValues?: ParameterValueDTO[] | null;
  /** Цена. */
  basicPrice?: PriceWithDiscountDTO;
  /** Себестоимость — затраты на самостоятельное производство товара или закупку у производителя или поставщиков. */
  purchasePrice?: BasePriceDTO;
  /** Дополнительные расходы на товар. Например, на доставку или упаковку. */
  additionalExpenses?: BasePriceDTO;
  /**
   * Использовать первое видео в карточке как видеообложку.
   *
   * Передайте `true`, чтобы первое видео использовалось как видеообложка, или `false`, чтобы видеообложка не отображалась в карточке товара.
   * @deprecated
   */
  firstVideoAsCover?: boolean;
  /**
   * Параметры, которые вы ранее передали в `UpdateOfferDTO`, а теперь хотите удалить.
   *
   * Если передать `adult`, `downloadable` и `firstVideoAsCover`, они не удалятся — их значение изменится на `false`.
   *
   * Можно передать сразу несколько значений.
   *
   * Не используйте вместе с соответствующим параметром в `UpdateOfferDTO`. Это приведет к ошибке `400`.
   * @minItems 1
   * @uniqueItems true
   */
  deleteParameters?: DeleteOfferParameterType[] | null;
};

/** Информация о товаре. */
export interface UpdateOfferMappingDTO {
  /** Параметры товара. */
  offer: UpdateOfferDTO;
  /** Информация о карточке товара на Маркете. */
  mapping?: UpdateMappingDTO;
}

export interface UpdateOfferMappingsRequest {
  /**
   * Список товаров, которые нужно добавить или обновить.
   *
   * {% note warning "Скоро мы уменьшим максимальное количество товаров в запросе" %}
   *
   * Уже сейчас не передавайте больше 100.
   *
   * {% endnote %}
   *
   *
   * @maxItems 500
   * @minItems 1
   */
  offerMappings: UpdateOfferMappingDTO[];
  /**
   * Будут ли использоваться только переданные вами данные о товарах.
   *
   * Значение по умолчанию: `false`. Чтобы удалить данные, которые добавил Маркет, передайте значение `true`.
   */
  onlyPartnerMediaContent?: boolean;
}

/** Текст ошибки или предупреждения. */
export interface OfferMappingErrorDTO {
  /**
   * Типы ошибок и предупреждений:
   *
   * * `UNKNOWN_CATEGORY` — указана неизвестная категория.
   * * `INVALID_CATEGORY` — указана нелистовая категория. Укажите ту, которая не имеет дочерних категорий.
   * * `EMPTY_MARKET_CATEGORY` — не указана категория Маркета при передаче характеристик категории.
   * * `UNKNOWN_PARAMETER` — передана характеристика, которой нет среди характеристик категории.
   * * `UNEXPECTED_BOOLEAN_VALUE` — вместо boolean-значения передано что-то другое.
   * * `NUMBER_FORMAT` — передана строка, не обозначающая число, вместо числа.
   * * `INVALID_UNIT_ID` — передана единица измерения, недопустимая для характеристики.
   * * `INVALID_GROUP_ID_LENGTH` — в названии превышено допустимое значение символов — 255.
   * * `INVALID_GROUP_ID_CHARACTERS` — переданы [недопустимые символы](*ascii-code).
   * * `INVALID_PICKER_URL` — передана ссылка на изображение для миниатюры, которой нет в переданных ссылках на изображение товара.
   * * `LOCKED_DIMENSIONS` — переданы габариты упаковки, которые нельзя изменить.
   * * `INVALID_COMMODITY_CODE` — передан некорректный товарный код.
   *
   * Проверить, какие категорийные характеристики доступны для заданной категории, и получить их настройки можно с помощью запроса [POST category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters).
   */
  type: OfferMappingErrorType;
  /**
   * Идентификатор характеристики, с которой связана ошибка или предупреждение.
   * @format int64
   */
  parameterId?: number;
  /** Текст ошибки или предупреждения. */
  message: string;
}

/** Ошибки и предупреждения, которые появились из-за переданных характеристик. */
export interface UpdateOfferMappingResultDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /**
   * Ошибки.
   *
   * Если хотя бы по одному товару есть ошибка, информация в каталоге не обновится по всем переданным товарам.
   * @minItems 1
   */
  errors?: OfferMappingErrorDTO[] | null;
  /**
   * Предупреждения.
   *
   * Информация в каталоге обновится.
   * @minItems 1
   */
  warnings?: OfferMappingErrorDTO[] | null;
}

/** Описывает проблемы, возникшие при сохранении товара. */
export type UpdateOfferMappingsResponse = ApiResponse & {
  /**
   * Ошибки и предупреждения, которые появились при обработке списка характеристик. Каждый элемент списка соответствует одному товару.
   *
   * Если ошибок и предупреждений нет, поле не передается.
   * @minItems 1
   */
  results?: UpdateOfferMappingResultDTO[] | null;
};

/** Информация о товаре. */
export interface SuggestedOfferDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId?: ShopSku;
  /**
   * Составляйте название по схеме: тип + бренд или производитель + модель + особенности, если есть (например, цвет, размер или вес) и количество в упаковке.
   *
   * Не включайте в название условия продажи (например, «скидка», «бесплатная доставка» и т. д.), эмоциональные характеристики («хит», «супер» и т. д.). Не пишите слова большими буквами — кроме устоявшихся названий брендов и моделей.
   *
   * Оптимальная длина — 50–60 символов.
   *
   * [Рекомендации и правила](https://yandex.ru/support/marketplace/assortment/fields/title.html)
   */
  name?: OfferName;
  /**
   * {% note warning "Вместо него используйте `marketCategoryId`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Категория товара в вашем магазине.
   */
  category?: OfferCategory;
  /** Название бренда или производителя. Должно быть записано так, как его пишет сам бренд. */
  vendor?: OfferVendor;
  /**
   * Указывайте в виде последовательности цифр. Подойдут коды :no-translate[EAN-13, EAN-8, UPC-A, UPC-E] или :no-translate[Code 128].
   *
   * Для книг указывайте :no-translate[ISBN].
   *
   * Для товаров [определенных категорий и торговых марок](https://yastatic.net/s3/doc-binary/src/support/market/ru/yandex-market-list-for-gtin.xlsx) штрихкод должен быть действительным кодом :no-translate[GTIN]. Обратите внимание: внутренние штрихкоды, начинающиеся на 2 или 02, и коды формата :no-translate[Code 128] не являются :no-translate[GTIN].
   *
   * [Что такое :no-translate[GTIN]](:no-translate[*gtin])
   *
   */
  barcodes?: OfferBarcodes;
  /**
   * Подробное описание товара: например, его преимущества и особенности.
   *
   * Не давайте в описании инструкций по установке и сборке. Не используйте слова «скидка», «распродажа», «дешевый», «подарок» (кроме подарочных категорий), «бесплатно», «акция», «специальная цена», «новинка», «new», «аналог», «заказ», «хит». Не указывайте никакой контактной информации и не давайте ссылок.
   *
   * Для форматирования текста можно использовать теги HTML:
   *
   * * \<h>, \<h1>, \<h2> и так далее — для заголовков;
   * * \<br> и \<p> — для переноса строки;
   * * \<ol> — для нумерованного списка;
   * * \<ul> — для маркированного списка;
   * * \<li> — для создания элементов списка (должен находиться внутри \<ol> или \<ul>);
   * * \<div> — поддерживается, но не влияет на отображение текста.
   *
   * Оптимальная длина — 400–600 символов.
   *
   * [Рекомендации и правила](https://yandex.ru/support/marketplace/assortment/fields/description.html)
   */
  description?: OfferDescription;
  /** Артикул товара от производителя. */
  vendorCode?: OfferVendorCode;
  /** Цена на товар. */
  basicPrice?: BasePriceDTO;
}

export interface GetSuggestedOfferMappingsRequest {
  /**
   * Список товаров.
   * @maxItems 500
   * @minItems 1
   */
  offers?: SuggestedOfferDTO[] | null;
}

/** Товар с соответствующей карточкой на Маркете. */
export interface SuggestedOfferMappingDTO {
  /** Информация о товаре. */
  offer?: SuggestedOfferDTO;
  /** Информация о карточке на Маркете. */
  mapping?: GetMappingDTO;
}

/** Подобранные карточки на Маркете. */
export interface GetSuggestedOfferMappingsResultDTO {
  /** Список товаров. */
  offers: SuggestedOfferMappingDTO[];
}

export type GetSuggestedOfferMappingsResponse = ApiResponse & {
  /** Подобранные карточки на Маркете. */
  result?: GetSuggestedOfferMappingsResultDTO;
};

/** Товары, которые нужно поместить в архив. */
export interface AddOffersToArchiveRequest {
  /**
   * Список товаров, которые нужно поместить в архив.
   * @maxItems 200
   * @minItems 1
   * @uniqueItems true
   */
  offerIds: ShopSku[];
}

/** Товар, который не удалось поместить в архив. */
export interface AddOffersToArchiveErrorDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /** Причина, по которой товар не удалось поместить в архив. */
  error: AddOffersToArchiveErrorType;
}

/** Товары, которые не удалось поместить в архив. */
export interface AddOffersToArchiveDTO {
  /**
   * Список товаров, которые не удалось поместить в архив.
   * @minItems 1
   */
  notArchivedOffers?: AddOffersToArchiveErrorDTO[] | null;
}

/** Результат архивации товаров. */
export type AddOffersToArchiveResponse = ApiResponse & {
  /** Товары, которые не удалось поместить в архив. */
  result?: AddOffersToArchiveDTO;
};

/** Товары, которые нужно восстановить из архива. */
export interface DeleteOffersFromArchiveRequest {
  /**
   * Список товаров, которые нужно восстановить из архива.
   * @maxItems 200
   * @minItems 1
   * @uniqueItems true
   */
  offerIds: ShopSku[];
}

/** Товары, которые не удалось восстановить из архива. */
export interface DeleteOffersFromArchiveDTO {
  /**
   * Список товаров, которые не удалось восстановить из архива.
   * @minItems 1
   * @uniqueItems true
   */
  notUnarchivedOfferIds?: ShopSku[] | null;
}

/** Результат разархивации товаров. */
export type DeleteOffersFromArchiveResponse = ApiResponse & {
  /** Товары, которые не удалось восстановить из архива. */
  result?: DeleteOffersFromArchiveDTO;
};

/** Причины, по которым товар не прошел модерацию. */
export interface OfferProcessingNoteDTO {
  /** Тип причины, по которой товар не прошел модерацию. */
  type?: OfferProcessingNoteType;
  /** Дополнительная информация о причине отклонения товара. */
  payload?: string;
}

/** Информация о статусе публикации товара на Маркете. */
export interface OfferProcessingStateDTO {
  /** Статус публикации товара */
  status?: OfferProcessingStatusType;
  /**
   * Причины, по которым товар не прошел модерацию.
   * @minItems 1
   */
  notes?: OfferProcessingNoteDTO[] | null;
}

/** Базовая информация о товарах в каталоге. */
export interface MappingsOfferInfoDTO {
  /**
   * Составляйте название по схеме: тип + бренд или производитель + модель + особенности, если есть (например, цвет, размер или вес) и количество в упаковке.
   *
   * Не включайте в название условия продажи (например, «скидка», «бесплатная доставка» и т. д.), эмоциональные характеристики («хит», «супер» и т. д.). Не пишите слова большими буквами — кроме устоявшихся названий брендов и моделей.
   *
   * Оптимальная длина — 50–60 символов.
   *
   * [Рекомендации и правила](https://yandex.ru/support/marketplace/assortment/fields/title.html)
   */
  name?: OfferName;
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  shopSku?: ShopSku;
  /**
   * {% note warning "Вместо него используйте `marketCategoryId`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Категория товара в вашем магазине.
   */
  category?: OfferCategory;
  /** Название бренда или производителя. Должно быть записано так, как его пишет сам бренд. */
  vendor?: OfferVendor;
  /** Артикул товара от производителя. */
  vendorCode?: OfferVendorCode;
  /**
   * Подробное описание товара: например, его преимущества и особенности.
   *
   * Не давайте в описании инструкций по установке и сборке. Не используйте слова «скидка», «распродажа», «дешевый», «подарок» (кроме подарочных категорий), «бесплатно», «акция», «специальная цена», «новинка», «new», «аналог», «заказ», «хит». Не указывайте никакой контактной информации и не давайте ссылок.
   *
   * Для форматирования текста можно использовать теги HTML:
   *
   * * \<h>, \<h1>, \<h2> и так далее — для заголовков;
   * * \<br> и \<p> — для переноса строки;
   * * \<ol> — для нумерованного списка;
   * * \<ul> — для маркированного списка;
   * * \<li> — для создания элементов списка (должен находиться внутри \<ol> или \<ul>);
   * * \<div> — поддерживается, но не влияет на отображение текста.
   *
   * Оптимальная длина — 400–600 символов.
   *
   * [Рекомендации и правила](https://yandex.ru/support/marketplace/assortment/fields/description.html)
   */
  description?: OfferDescription;
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  id?: ShopSku;
  /**
   * Идентификатор фида.
   * @format int64
   */
  feedId?: number;
  /**
   * Указывайте в виде последовательности цифр. Подойдут коды :no-translate[EAN-13, EAN-8, UPC-A, UPC-E] или :no-translate[Code 128].
   *
   * Для книг указывайте :no-translate[ISBN].
   *
   * Для товаров [определенных категорий и торговых марок](https://yastatic.net/s3/doc-binary/src/support/market/ru/yandex-market-list-for-gtin.xlsx) штрихкод должен быть действительным кодом :no-translate[GTIN]. Обратите внимание: внутренние штрихкоды, начинающиеся на 2 или 02, и коды формата :no-translate[Code 128] не являются :no-translate[GTIN].
   *
   * [Что такое :no-translate[GTIN]](:no-translate[*gtin])
   *
   */
  barcodes?: OfferBarcodes;
  /**
   * URL фотографии товара или страницы с описанием на вашем сайте.
   *
   * Переданные данные не будут отображаться на витрине, но они помогут специалистам Маркета найти карточку для вашего товара.
   *
   * Должен содержать один вложенный параметр `url`.
   * @minItems 1
   * @uniqueItems true
   */
  urls?: string[] | null;
  /**
   * Ссылки (:no-translate[URL]) изображений товара в хорошем качестве.
   *
   * Можно указать до 30 ссылок. При этом изображение по первой ссылке будет основным. Оно используется в качестве изображения товара в поиске Маркета и на карточке товара. Другие изображения товара доступны в режиме просмотра увеличенных изображений.
   * @maxItems 30
   * @minItems 1
   * @uniqueItems false
   */
  pictures?: string[] | null;
  /**
   * Изготовитель товара: компания, которая произвела товар, ее адрес и регистрационный номер (если есть).
   *
   * Необязательный параметр.
   */
  manufacturer?: string;
  /**
   * Список стран, в которых произведен товар.
   *
   * Обязательный параметр.
   *
   * Должен содержать хотя бы одну, но не больше 5 стран.
   * @maxItems 5
   * @minItems 1
   * @uniqueItems true
   */
  manufacturerCountries?: string[] | null;
  /**
   * Минимальное количество единиц товара, которое вы поставляете на склад.
   *
   * Например, если вы поставляете детское питание партиями минимум по 10 коробок, а в каждой коробке по 6 баночек, укажите значение 60.
   * @format int32
   */
  minShipment?: number;
  /**
   * Количество единиц товара в одной упаковке, которую вы поставляете на склад.
   *
   * Например, если вы поставляете детское питание коробками по 6 баночек, укажите значение 6.
   * @format int32
   */
  transportUnitSize?: number;
  /**
   * Добавочная партия: по сколько единиц товара можно добавлять к минимальному количеству `minShipment`.
   *
   * Например, если вы поставляете детское питание партиями минимум по 10 коробок и хотите добавлять к минимальной партии по 2 коробки, а в каждой коробке по 6 баночек, укажите значение 12.
   * @deprecated
   * @format int32
   */
  quantumOfSupply?: number;
  /**
   * Срок, за который продавец поставляет товары на склад, в днях.
   * @format int32
   */
  deliveryDurationDays?: number;
  /**
   * Сколько мест (если больше одного) занимает товар.
   *
   * Параметр указывается, только если товар занимает больше одного места (например, кондиционер занимает два места: внешний и внутренний блоки в двух коробках). Если товар занимает одно место, не указывайте этот параметр.
   * @format int32
   */
  boxCount?: number;
  /**
   * Список кодов товара в единой Товарной номенклатуре внешнеэкономической деятельности (ТН ВЭД).
   *
   * Обязательный параметр, если товар подлежит особому учету (например, в системе «Меркурий» как продукция животного происхождения или в системе «Честный ЗНАК»).
   *
   * Может содержать только один вложенный код ТН ВЭД.
   * @minItems 1
   * @uniqueItems true
   */
  customsCommodityCodes?: string[] | null;
  /** Габариты упаковки и вес товара. */
  weightDimensions?: OfferWeightDimensionsDTO;
  /**
   * Дни недели, в которые продавец поставляет товары на склад.
   * @minItems 1
   * @uniqueItems true
   */
  supplyScheduleDays?: DayOfWeekType[] | null;
  /**
   * {% note warning "Вместо него используйте `shelfLife`. Совместное использование обоих параметров приведет к ошибке." %}
   *
   *
   *
   * {% endnote %}
   *
   * Срок годности: через сколько дней товар станет непригоден для использования.
   * @deprecated
   * @format int32
   */
  shelfLifeDays?: number;
  /**
   * {% note warning "Вместо него используйте `lifeTime`. Совместное использование обоих параметров приведет к ошибке." %}
   *
   *
   *
   * {% endnote %}
   *
   * Срок службы: сколько дней товар будет исправно выполнять свою функцию, а изготовитель — нести ответственность за его существенные недостатки.
   * @deprecated
   * @format int32
   */
  lifeTimeDays?: number;
  /**
   * Гарантийный срок товара: сколько дней возможно обслуживание и ремонт товара или возврат денег, а изготовитель или продавец будет нести ответственность за недостатки товара.
   * @format int32
   */
  guaranteePeriodDays?: number;
  /** Информация о статусе публикации товара на Маркете. */
  processingState?: OfferProcessingStateDTO;
  /**
   * Планы по поставкам:
   *
   * * `ACTIVE` — поставки будут.
   * * `INACTIVE` — поставок не будет: товар есть на складе, но вы больше не планируете его поставлять. Через 60 дней после того, как товар закончится на складе, этот статус изменится на `DELISTED`.
   * * `DELISTED` — архив: товар закончился на складе, и его поставок больше не будет. Если товар вернется на склад (например, покупатель вернет заказ), этот статус изменится на `INACTIVE`.
   *
   * Значения по умолчанию:
   *
   * * при добавлении товара — `ACTIVE`;
   * * при редактировании товара — такое же, как и при последнем обновлении каталога (в том числе другими способами, не через API).
   */
  availability?: OfferAvailabilityStatusType;
  /**
   * Информация о сроке годности: через какое время (в годах, месяцах, днях, неделях или часах) товар станет непригоден для использования. Например, срок годности есть у таких категорий, как продукты питания и медицинские препараты.
   *
   * Обязательный параметр, если у товара есть срок годности.
   *
   * {% note alert "У товара есть срок годности, а вы не укажете его" %}
   *
   * Товар будет скрыт с Маркета.
   *
   * {% endnote %}
   */
  shelfLife?: TimePeriodDTO;
  /**
   * Информация о сроке службы: в течение какого периода (в годах, месяцах, днях, неделях или часах) товар будет исправно выполнять свою функцию, а изготовитель — нести ответственность за его существенные недостатки.
   *
   * Обязательный параметр, если у товара есть срок службы.
   *
   * {% note alert "У товара есть срок службы, а вы не укажете его" %}
   *
   *  Товар будет скрыт с Маркета.
   *
   * {% endnote %}
   */
  lifeTime?: TimePeriodDTO;
  /**
   * Информация о гарантийном сроке: в течение какого периода (в годах, месяцах, днях, неделях или часах) возможны обслуживание и ремонт товара или возврат денег, а изготовитель или продавец будет нести ответственность за недостатки товара.
   *
   * Обязательный параметр, если у товара есть гарантийный срок.
   *
   * {% note alert "У товара есть гарантийный срок, а вы не укажете его" %}
   *
   * Товар будет скрыт с Маркета.
   *
   * {% endnote %}
   */
  guaranteePeriod?: TimePeriodDTO;
  /**
   * Номер документа на товар.
   *
   * Перед указанием номера документ нужно загрузить в кабинете продавца на Маркете. [Инструкция](https://yandex.ru/support/marketplace/assortment/restrictions/certificates.html)
   */
  certificate?: string;
}

/** Информация о товарах в каталоге. */
export type MappingsOfferDTO = MappingsOfferInfoDTO & {
  /** Цена на товар. */
  price?: number;
};

/** Информация о текущей карточке товара на Маркете. */
export interface OfferMappingDTO {
  /**
   * :no-translate[SKU] на Маркете — идентификатор карточки товара на Маркете.
   *
   * При первом запросе `marketSku` привязывает товар к карточке Маркета. В дальнейшем изменить :no-translate[SKU] через отправку запроса нельзя, для этого нужно обратиться в службу поддержки.
   */
  marketSku?: MarketSku;
  /**
   * Идентификатор модели для текущей карточки товара на Маркете.
   *
   * Например, две лопатки разных цветов имеют разные :no-translate[SKU] на Маркете (параметр `marketSku`), но одинаковый идентификатор модели товара.
   * @format int64
   */
  modelId?: number;
  /**
   * Идентификатор категории для текущей карточки товара на Маркете.
   * @format int64
   */
  categoryId?: number;
}

/** Информация о карточке товара. */
export interface OfferMappingInfoDTO {
  /**
   * Информация о карточке товара на Маркете.
   *
   * Если параметр не указан, сотрудники Маркета сами подберут или создадут подходящую карточку товара, либо у него появится статус `NEED_CONTENT` (нужно найти карточку или создать ее самостоятельно) в выходных данных запроса [POST businesses/{businessId}/offer-mappings](../../reference/business-assortment/getOfferMappings.md).
   */
  mapping?: OfferMappingDTO;
  /** Информация о карточке товара на Маркете, проходящей модерацию для данного товара */
  awaitingModerationMapping?: OfferMappingDTO;
  /** Информация о последней карточке товара на Маркете, отклоненной на модерации для данного товара */
  rejectedMapping?: OfferMappingDTO;
}

/** Список товаров. */
export type OfferMappingEntryDTO = {
  /** Информация о товаре из каталога. */
  offer?: MappingsOfferDTO;
} & OfferMappingInfoDTO;

/** Информация о товарах в каталоге. */
export interface OfferMappingEntriesDTO {
  /** Информация о страницах результатов. */
  paging?: ScrollingPagerDTO;
  /** Информация о товарах в каталоге. */
  offerMappingEntries: OfferMappingEntryDTO[];
}

/** Ответ на запрос списка товаров в каталоге. */
export type GetOfferMappingEntriesResponse = ApiResponse & {
  /** Информация о товарах в каталоге. */
  result?: OfferMappingEntriesDTO;
};

/** Информация о товарах в каталоге. */
export type UpdateMappingsOfferDTO = MappingsOfferInfoDTO;

/** Список товаров. */
export type UpdateOfferMappingEntryDTO = {
  /** Информация о товаре из каталога. */
  offer?: UpdateMappingsOfferDTO;
} & OfferMappingInfoDTO;

/** Запрос на обновление товаров. */
export interface UpdateOfferMappingEntryRequest {
  /**
   * Информация о товарах в каталоге.
   * @maxItems 500
   * @minItems 1
   */
  offerMappingEntries: UpdateOfferMappingEntryDTO[];
}

/** Запрос рекомендованных карточек товара. */
export interface GetSuggestedOfferMappingEntriesRequest {
  /**
   * Список товаров.
   * @maxItems 500
   * @minItems 1
   */
  offers: MappingsOfferDTO[];
}

/** Информация о рекомендованных карточках товаров. */
export type EnrichedMappingsOfferDTO = MappingsOfferDTO & {
  /**
   * Идентификатор категории для рекомендованной карточки товара на Маркете.
   *
   * Возвращается только вместе с параметром `marketSku`.
   * @format int64
   */
  marketCategoryId?: number;
  /**
   * Название категории для рекомендованной карточки товара на Маркете.
   *
   * Может отсутствовать в ответе.
   */
  marketCategoryName?: string;
  /**
   * Идентификатор модели для рекомендованной карточки товара на Маркете.
   *
   * Может отсутствовать в ответе.
   * @deprecated
   * @format int64
   */
  marketModelId?: number;
  /**
   * Название модели для рекомендованной карточки товара на Маркете.
   *
   * Возвращается только вместе с параметром ##marketSku##.
   * @deprecated
   */
  marketModelName?: string;
  /**
   * :no-translate[SKU] на Маркете — идентификатор рекомендованной карточки товара на Маркете.
   *
   * Параметр возвращается, если для товара нашлась карточка. Если параметра нет в ответе, возможно, товар еще не продается на Маркете или вы передали неполные (некорректные) данные в запросе.
   */
  marketSku?: MarketSku;
  /**
   * Название товара с рекомендованной карточки на Маркете.
   *
   * Может отсутствовать в ответе.
   */
  marketSkuName?: string;
};

/** Список рекомендованных карточек товара. */
export interface OfferMappingSuggestionsListDTO {
  /** Список товаров. */
  offers: EnrichedMappingsOfferDTO[];
}

/** Ответ со списком рекомендованных карточек товара. */
export type GetSuggestedOfferMappingEntriesResponse = ApiResponse & {
  /** Список рекомендованных карточек товара. */
  result?: OfferMappingSuggestionsListDTO;
};

/** Цены. */
export type UpdateBusinessPricesDTO = PriceWithDiscountDTO & {
  /**
   * Минимальная цена товара для попадания в акцию «Бестселлеры Маркета». Подробнее об этом способе участия читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/marketing/promos/market/bestsellers#minimum).
   *
   * При передаче цены ориентируйтесь на значение параметра `maxPromoPrice` (максимально возможная цена для участия в акции) в методе [POST businesses/{businessId}/promos/offers](../../reference/promos/getPromoOffers.md).
   *
   * Товар не попадет в акцию с помощью этого способа, если:
   *
   * * Не передать этот параметр. Удалится значение, которое вы указали ранее.
   * * В методе [POST businesses/{businessId}/offer-prices](../../reference/prices/getDefaultPrices.md) для этого товара возвращается параметр `excludedFromBestsellers` со значением `true`.
   *
   *   Но товар по-прежнему сможет попасть в акцию через [автоматическое участие](:no-translate[*auto]) или [ручное добавление](:no-translate[*updatePromoOffers]).
   * @min 0
   * @exclusiveMin true
   * @max 100000000
   */
  minimumForBestseller?: number;
};

/** Товар с новой ценой. */
export interface UpdateBusinessOfferPriceDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /** Цены. */
  price: UpdateBusinessPricesDTO;
}

/** Запрос на установку цен, которые действуют во всех магазинах. */
export interface UpdateBusinessPricesRequest {
  /**
   * Список товаров с ценами.
   * @maxItems 500
   * @minItems 1
   */
  offers: UpdateBusinessOfferPriceDTO[];
}

/**
 * Идентификатор НДС, применяемый для товара:
 *
 * * `2` — НДС 10%. Например, используется при реализации отдельных продовольственных и медицинских товаров.
 * * `5` — НДС 0%. Например, используется при продаже товаров, вывезенных в таможенной процедуре экспорта, или при оказании услуг по международной перевозке товаров.
 * * `6` — НДС не облагается, используется только для отдельных видов услуг.
 * * `7` — НДС 20%. Основной НДС с 2019 года.
 * * `10` — НДС 5%. НДС для упрощенной системы налогообложения (УСН).
 * * `11` — НДС 7%. НДС для упрощенной системы налогообложения (УСН).
 *
 * Если параметр не указан, используется НДС, установленный в кабинете.
 *
 * **Для продавцов :no-translate[Market Yandex Go]** недоступна передача и получение НДС.
 * @format int32
 */
export type VatType = number;

/** Цена с указанием скидки, валюты и времени последнего обновления. */
export interface PriceDTO {
  /** Цена на товар. */
  value?: number;
  /**
   * Цена на товар без скидки.
   *
   * Число должно быть целым. Вы можете указать цену со скидкой от 5 до 99%.
   *
   * Передавайте этот параметр при каждом обновлении цены, если предоставляете скидку на товар.
   */
  discountBase?: number;
  /** Валюта, в которой указана цена на товар. */
  currencyId?: CurrencyType;
  /**
   * Идентификатор НДС, применяемый для товара:
   *
   * * `2` — НДС 10%. Например, используется при реализации отдельных продовольственных и медицинских товаров.
   * * `5` — НДС 0%. Например, используется при продаже товаров, вывезенных в таможенной процедуре экспорта, или при оказании услуг по международной перевозке товаров.
   * * `6` — НДС не облагается, используется только для отдельных видов услуг.
   * * `7` — НДС 20%. Основной НДС с 2019 года.
   * * `10` — НДС 5%. НДС для упрощенной системы налогообложения (УСН).
   * * `11` — НДС 7%. НДС для упрощенной системы налогообложения (УСН).
   *
   * Если параметр не указан, используется НДС, установленный в кабинете.
   *
   * **Для продавцов :no-translate[Market Yandex Go]** недоступна передача и получение НДС.
   */
  vat?: VatType;
}

/** Товар с информацией о новой цене на него. */
export interface OfferPriceDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId?: ShopSku;
  /** Цена с указанием скидки, валюты и времени последнего обновления. */
  price?: PriceDTO;
}

/** Запрос на установку цен на товары. */
export interface UpdatePricesRequest {
  /**
   * Список товаров.
   * @maxItems 2000
   * @minItems 1
   */
  offers: OfferPriceDTO[];
}

/** Информация об установленной цене на товар. */
export interface OfferPriceResponseDTO {
  /** Идентификатор предложения из прайс-листа. */
  id?: string;
  /** Цена с указанием скидки, валюты и времени последнего обновления. */
  price?: PriceDTO;
  /** Идентификатор карточки товара на Маркете. */
  marketSku?: MarketSku;
  /**
   * Дата и время последнего обновления цены на товар.
   * @format date-time
   */
  updatedAt?: string;
}

/** Список цен на товары. */
export interface OfferPriceListResponseDTO {
  /** Страница списка. */
  offers: OfferPriceResponseDTO[];
  /** Идентификатор следующей страницы. */
  paging?: ForwardScrollingPagerDTO;
  /**
   * Количество всех цен магазина, измененных через :no-translate[API].
   * @format int32
   */
  total?: number;
}

/** Ответ на запрос списка цен. */
export type GetPricesResponse = ApiResponse & {
  /** Список цен на товары. */
  result?: OfferPriceListResponseDTO;
};

/** Запрос списка цен. */
export interface GetPricesByOfferIdsRequest {
  /**
   * Список :no-translate[SKU].
   *
   * {% note warning "Такой список возвращается только целиком" %}
   *
   * Если вы запрашиваете информацию по конкретным :no-translate[SKU], не заполняйте:
   *
   * * `page_token`
   * * `limit`
   *
   * {% endnote %}
   *
   *
   * @maxItems 2000
   * @minItems 1
   * @uniqueItems true
   */
  offerIds?: ShopSku[] | null;
}

/** Информация об установленной цене. */
export interface OfferPriceByOfferIdsResponseDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId?: ShopSku;
  /** Цена с указанием скидки, валюты и времени последнего обновления. */
  price?: PriceDTO;
  /**
   * Дата и время последнего обновления цены.
   * @format date-time
   */
  updatedAt?: string;
}

/** Список цен. */
export interface OfferPriceByOfferIdsListResponseDTO {
  /** Страница списка цен. */
  offers: OfferPriceByOfferIdsResponseDTO[];
  /** Идентификатор следующей страницы. */
  paging?: ForwardScrollingPagerDTO;
}

/** Ответ на запрос списка цен. */
export type GetPricesByOfferIdsResponse = ApiResponse & {
  /** Список цен. */
  result?: OfferPriceByOfferIdsListResponseDTO;
};

/** Товар, для которого требуется получить цены для продвижения. */
export interface SuggestOfferPriceDTO {
  /** Идентификатор предложения из прайс-листа. */
  offerId?: ShopSku;
  /** Идентификатор карточки товара на Маркете. */
  marketSku?: MarketSku;
}

/** Запрос на получение списка цен для продвижения. */
export interface SuggestPricesRequest {
  /**
   * Список товаров.
   * @maxItems 1000
   */
  offers: SuggestOfferPriceDTO[];
}

/** Тип цены. */
export interface PriceSuggestDTO {
  /** Тип цены. */
  type?: PriceSuggestType;
  /** Цена в рублях. */
  price?: number;
}

/** Товар с ценами для продвижения. */
export interface PriceSuggestOfferDTO {
  /** Идентификатор карточки товара на Маркете. */
  marketSku?: MarketSku;
  /** Идентификатор предложения из прайс-листа. */
  offerId?: ShopSku;
  /**
   * Цены для продвижения.
   * @minItems 1
   */
  priceSuggestion?: PriceSuggestDTO[] | null;
}

/** Результат запроса цен для продвижения. */
export interface SuggestPricesResultDTO {
  /** Список товаров с ценами для продвижения. */
  offers: PriceSuggestOfferDTO[];
}

/** Ответ на запрос списка цен для продвижения. */
export type SuggestPricesResponse = ApiResponse & {
  /** Результат запроса цен для продвижения. */
  result?: SuggestPricesResultDTO;
};

/** Запрос списка цен. */
export interface GetDefaultPricesRequest {
  /**
   * Идентификаторы товаров, информация о которых нужна.
   * @maxItems 200
   * @minItems 1
   * @uniqueItems true
   */
  offerIds?: ShopSku[] | null;
  /** Находится ли товар в архиве. */
  archived?: boolean;
}

/** Цена с указанием валюты, скидки и времени последнего обновления, а также минимальная цена для попадания в акцию «Бестселлеры Маркета». */
export type OfferDefaultPriceDTO = GetPriceWithDiscountDTO & {
  /**
   * Минимальная цена товара для попадания в акцию «Бестселлеры Маркета». Подробнее об этом способе участия читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/marketing/promos/market/bestsellers#minimum).
   *
   * Передается в методе [POST businesses/{businessId}/offer-prices/updates](../../reference/business-assortment/updateBusinessPrices.md).
   * @min 0
   * @exclusiveMin true
   * @max 100000000
   */
  minimumForBestseller?: number;
  /**
   * Признак того, что товар не попадает в акцию «Бестселлеры Маркета». Подробнее об акции читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/bestsellers).
   *
   * Если значение `true`, в методе [POST businesses/{businessId}/offer-prices/updates](../../reference/business-assortment/updateBusinessPrices.md) параметр `minimumForBestseller` игнорируется.
   */
  excludedFromBestsellers?: boolean;
};

/** Информация об установленной цене на товар. */
export interface OfferDefaultPriceResponseDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /** Цена с указанием валюты, скидки и времени последнего обновления, а также минимальная цена для попадания в акцию «Бестселлеры Маркета». */
  price?: OfferDefaultPriceDTO;
}

/** Список цен на товары. */
export interface OfferDefaultPriceListResponseDTO {
  /** Список товаров. */
  offers: OfferDefaultPriceResponseDTO[];
  /** Идентификатор следующей страницы. */
  paging?: ForwardScrollingPagerDTO;
}

/** Ответ на запрос списка цен. */
export type GetDefaultPricesResponse = ApiResponse & {
  /** Список цен на товары. */
  result?: OfferDefaultPriceListResponseDTO;
};

/**
 * Фильтрации товаров
 *
 * В запросе можно указать либо фильтр `offerIds, либо любые другие фильтры товаров. Совместное использование фильтра offerIds с другими фильтрациями приведет к ошибке.
 */
export interface GetQuarantineOffersRequest {
  /**
   * Идентификаторы товаров, информация о которых нужна.
   * <br><br>
   * ⚠️ Не используйте это поле одновременно с фильтрами по статусам карточек, категориям, брендам или тегам. Если вы хотите воспользоваться фильтрами, оставьте поле пустым.
   * @maxItems 500
   * @minItems 1
   * @uniqueItems true
   */
  offerIds?: ShopSku[] | null;
  /**
   * Фильтр по статусам карточек.
   *
   * [Что такое карточка товара](https://yandex.ru/support/marketplace/assortment/content/index.html)
   * @minItems 1
   * @uniqueItems true
   */
  cardStatuses?: OfferCardStatusType[] | null;
  /**
   * Фильтр по категориям на Маркете.
   * @minItems 1
   * @uniqueItems true
   */
  categoryIds?: number[] | null;
  /**
   * Фильтр по брендам.
   * @minItems 1
   * @uniqueItems true
   */
  vendorNames?: string[] | null;
  /**
   * Фильтр по тегам.
   * @minItems 1
   * @uniqueItems true
   */
  tags?: string[] | null;
}

/** Параметр карантина. */
export interface PriceQuarantineVerdictParameterDTO {
  /** Название параметра. */
  name: PriceQuarantineVerdictParamNameType;
  /** Значение параметра. */
  value: string;
}

/** Причина попадания товара в карантин. */
export interface PriceQuarantineVerdictDTO {
  /** Тип карантина. */
  type?: PriceQuarantineVerdictType;
  /** Цена, из-за которой товар попал в карантин, и значения для сравнения. Конкретный набор параметров зависит от типа карантина. */
  params: PriceQuarantineVerdictParameterDTO[];
}

/** Товар в карантине. */
export interface QuarantineOfferDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId?: ShopSku;
  /**
   * {% note warning "Вместо него используйте значение из `verdicts` → `params`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Новая цена.
   * @deprecated
   */
  currentPrice?: BasePriceDTO;
  /**
   * {% note warning "Вместо него используйте значение из `verdicts` → `params`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Последняя цена до попадания в карантин.
   * @deprecated
   */
  lastValidPrice?: BasePriceDTO;
  /**
   * Причины попадания товара в карантин.
   * @minItems 1
   */
  verdicts?: PriceQuarantineVerdictDTO[] | null;
}

/** Список товаров в карантине. */
export interface GetQuarantineOffersResultDTO {
  /** Информация о страницах результатов. */
  paging?: ScrollingPagerDTO;
  /** Страница списка товаров в карантине. */
  offers: QuarantineOfferDTO[];
}

/** Ответ на запрос списка товаров в карантине. */
export type GetQuarantineOffersResponse = ApiResponse & {
  /** Список товаров в карантине. */
  result?: GetQuarantineOffersResultDTO;
};

/** Запрос на подтверждение цены. */
export interface ConfirmPricesRequest {
  /**
   * Идентификаторы товаров, у которых подтверждается цена.
   * @maxItems 200
   * @minItems 1
   * @uniqueItems true
   */
  offerIds: ShopSku[];
}

/** Информация о скрытии. */
export interface HiddenOfferDTO {
  /** Идентификатор предложения из прайс-листа. */
  offerId: ShopSku;
}

/** Список скрытых вами товаров. */
export interface GetHiddenOffersResultDTO {
  /** Информация о страницах результатов. */
  paging?: ScrollingPagerDTO;
  /** Список скрытых товаров. */
  hiddenOffers: HiddenOfferDTO[];
}

/** Ответ на запрос списка скрытий. */
export type GetHiddenOffersResponse = ApiResponse & {
  /** Список скрытых вами товаров. */
  result?: GetHiddenOffersResultDTO;
};

/** Запрос на скрытие оферов. */
export interface AddHiddenOffersRequest {
  /**
   * Список скрытых товаров.
   * @maxItems 500
   * @minItems 1
   */
  hiddenOffers: HiddenOfferDTO[];
}

/** Запрос на возобновление показа оферов. */
export interface DeleteHiddenOffersRequest {
  /**
   * Список скрытых товаров.
   * @maxItems 500
   * @minItems 1
   */
  hiddenOffers: HiddenOfferDTO[];
}

/** Информация об остатках товара. */
export interface UpdateStockItemDTO {
  /**
   * Количество доступного товара.
   * @format int64
   * @min 0
   * @max 2000000000
   */
  count: number;
  /**
   * Дата и время последнего обновления информации об остатках.
   * <br><br>
   * Если вы не передали параметр `updatedAt`, используется текущее время.
   * <br><br>
   * Формат даты и времени: :no-translate[ISO 8601] со смещением относительно :no-translate[UTC]. Например, `2017-11-21T00:42:42+03:00`.
   * @format date-time
   */
  updatedAt?: string;
}

/** Информация об остатках одного товара на одном из складов. */
export interface UpdateStockDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  sku: ShopSku;
  /**
   * Информация об остатках товара.
   * @maxItems 1
   * @minItems 1
   */
  items: UpdateStockItemDTO[];
}

/** Запрос на изменение информации по остаткам товаров. */
export interface UpdateStocksRequest {
  /**
   * Данные об остатках товаров.
   * @maxItems 2000
   * @minItems 1
   * @uniqueItems true
   */
  skus: UpdateStockDTO[];
}

/** Фильтры для запроса остатков. */
export interface GetWarehouseStocksRequest {
  /**
   * Идентификатор склада.
   *
   * Если параметр указан, возвращаются только товары в наличии на переданном складе.
   *
   * **Для модели :no-translate[FBY]:** получить список складов Маркета можно с помощью метода [GET warehouses](../../reference/warehouses/getFulfillmentWarehouses.md).
   * @format int64
   * @min 1
   */
  stocksWarehouseId?: number;
  /**
   * **Только для модели FBY**
   *
   * Возвращать ли информацию по оборачиваемости.
   *
   * Значение по умолчанию: `false`. Если информация нужна, передайте значение `true`.
   * @default false
   */
  withTurnover?: boolean;
  /**
   * Фильтр по нахождению в архиве.
   *
   * Передайте `true`, чтобы получить информацию об остатках товаров, которые находятся в архиве. Если фильтр не заполнен или передано `false`, в ответе возвращается информация о товарах, которые не находятся в архиве.
   */
  archived?: boolean;
  /**
   * Фильтр по вашим :no-translate[SKU] товаров.
   *
   * Возвращается информация об остатках всех переданных :no-translate[SKU], включая товары в архиве.
   *
   * {% note warning "Такой список возвращается только целиком" %}
   *
   * Если вы запрашиваете информацию по конкретным :no-translate[SKU], не заполняйте:
   *
   * * `page_token`
   * * `limit`
   * * `archived`
   * * `stocksOnWarehouse`
   *
   * {% endnote %}
   *
   *
   * @maxItems 500
   * @minItems 1
   * @uniqueItems true
   */
  offerIds?: ShopSku[] | null;
}

/**
 * Информация об оборачиваемости товара.
 *
 * Подробнее о хранении и оборачиваемости товаров читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/storage/logistics#turnover).
 */
export interface TurnoverDTO {
  /** Оценка оборачиваемости. */
  turnover: TurnoverType;
  /**
   * Значение в днях.
   * @format double
   */
  turnoverDays?: number;
}

/** Информация об остатках товара. */
export interface WarehouseStockDTO {
  /** Тип остатков. */
  type: WarehouseStockType;
  /**
   * Значение остатков.
   * @format int64
   */
  count: number;
}

/** Информация об остатках товара. */
export interface WarehouseOfferDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /** Информация об оборачиваемости. */
  turnoverSummary?: TurnoverDTO;
  /** Информация об остатках. */
  stocks: WarehouseStockDTO[];
  /**
   * Дата и время последнего обновления информации об остатках.
   *
   * Формат даты и времени: :no-translate[ISO 8601] со смещением относительно :no-translate[UTC]. Например, `2023-11-21T00:42:42+03:00`.
   * @format date-time
   */
  updatedAt?: string;
}

/** Информация об остатках товаров на складе. */
export interface WarehouseOffersDTO {
  /**
   * Идентификатор склада.
   * @format int64
   */
  warehouseId: number;
  /** Информация об остатках. */
  offers: WarehouseOfferDTO[];
}

/** Список складов с информацией об остатках на каждом из них. */
export interface GetWarehouseStocksDTO {
  /** Информация о страницах результатов. */
  paging?: ScrollingPagerDTO;
  /** Страница списка складов. */
  warehouses: WarehouseOffersDTO[];
}

export type GetWarehouseStocksResponse = ApiResponse & {
  /** Список складов с информацией об остатках на каждом из них. */
  result?: GetWarehouseStocksDTO;
};

/** Информация о службе доставки. */
export interface DeliveryServiceInfoDTO {
  /**
   * Идентификатор службы доставки.
   * @format int64
   */
  id: number;
  /** Наименование службы доставки. */
  name: string;
}

/** Информация о службах доставки. */
export interface DeliveryServicesDTO {
  /** Информация о службе доставки. */
  deliveryService: DeliveryServiceInfoDTO[];
}

/** Ответ на запрос списка служб доставки. */
export interface GetDeliveryServicesResponse {
  /** Информация о службах доставки. */
  result?: DeliveryServicesDTO;
}

/** Запрос информации по заказам. */
export interface GetOrdersStatsRequest {
  /**
   * Начальная дата, когда заказ был сформирован.
   *
   * Формат даты: `ГГГГ‑ММ‑ДД`.
   *
   * Нельзя использовать вместе с параметрами `updateFrom` и `updateTo`.
   * @format date
   */
  dateFrom?: string;
  /**
   * Конечная дата, когда заказ был сформирован.
   *
   * Формат даты: `ГГГГ‑ММ‑ДД`.
   *
   * Нельзя использовать вместе с параметрами `updateFrom` и `updateTo`.
   * @format date
   */
  dateTo?: string;
  /**
   * Начальная дата периода, за который были изменения в заказе (например, статуса или информации о платежах).
   *
   * Формат даты: `ГГГГ‑ММ‑ДД`.
   *
   * Нельзя использовать вместе с параметрами `dateFrom` и `dateTo`.
   * @format date
   */
  updateFrom?: string;
  /**
   * Конечная дата периода, за который были изменения в заказе (например, статуса или информации о платежах).
   *
   * Формат даты: `ГГГГ‑ММ‑ДД`.
   *
   * Нельзя использовать вместе с параметрами `dateFrom` и `dateTo`.
   * @format date
   */
  updateTo?: string;
  /**
   * Список идентификаторов заказов.
   * @minItems 1
   * @uniqueItems true
   */
  orders?: number[] | null;
  /**
   * Список статусов заказов.
   * @minItems 1
   * @uniqueItems true
   */
  statuses?: OrderStatsStatusType[] | null;
  /**
   * Нужно ли вернуть только те заказы, в составе которых есть хотя бы один товар с кодом идентификации в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) или [:no-translate[«ASL BELGISI»]](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]):
   *
   * * `true` — да.
   * * `false` — нет.
   * Такие коды присваиваются товарам, которые подлежат маркировке и относятся к определенным категориям.
   */
  hasCis?: boolean;
}

/** Информация о регионе доставки. */
export interface OrdersStatsDeliveryRegionDTO {
  /**
   * Идентификатор региона доставки.
   * @format int64
   */
  id?: number;
  /** Название региона доставки. */
  name?: string;
}

/** Цена или скидки на товар. */
export interface OrdersStatsPriceDTO {
  /** Тип скидки или цена на товар. */
  type?: OrdersStatsPriceType;
  /**
   * Цена или скидка на единицу товара в заказе.
   *
   * Точность — два знака после запятой.
   *
   * Включает НДС.
   */
  costPerItem?: number;
  /**
   * Суммарная цена или скидка на все единицы товара в заказе.
   *
   * Точность — два знака после запятой.
   *
   * Включает НДС.
   */
  total?: number;
}

/** Информация о складе, на котором хранится товар. */
export interface OrdersStatsWarehouseDTO {
  /**
   * Идентификатор склада.
   * @format int64
   */
  id?: number;
  /** Название склада. */
  name?: string;
}

/** Информация об удалении товара из заказа. */
export interface OrdersStatsDetailsDTO {
  /** Статус товара. */
  itemStatus?: OrdersStatsItemStatusType;
  /**
   * Количество товара со статусом, указанном в параметре `itemStatus`.
   * @format int64
   */
  itemCount?: number;
  /**
   * Дата, когда товар получил статус, указанный в параметре `itemStatus`.
   *
   * Формат даты: `ГГГГ-ММ-ДД`.
   * @format date
   */
  updateDate?: string;
  /** Тип товара. */
  stockType?: OrdersStatsStockType;
}

/**
 * Список товаров в заказе после возможных изменений.
 *
 * В ходе обработки заказа Маркет может удалить из него единицы товаров — при проблемах на складе или по инициативе пользователя.
 *
 * * Если из заказа удалены все единицы товара, его не будет в списке `items` — только в списке `initialItems`.
 *
 * * Если в заказе осталась хотя бы одна единица товара, он будет и в списке `items` (с уменьшенным количеством единиц `count`), и в списке `initialItems` (с первоначальным количеством единиц `initialCount`).
 */
export interface OrdersStatsItemDTO {
  /** Название товара. */
  offerName?: string;
  /** Идентификатор карточки товара на Маркете. */
  marketSku?: MarketSku;
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  shopSku?: ShopSku;
  /**
   * Количество единиц товара с учетом удаленных единиц.
   *
   * Если из заказа удалены все единицы товара, он попадет только в список `initialItems`.
   * @format int32
   */
  count?: number;
  /**
   * Цена или скидки на товар.
   * @minItems 1
   */
  prices?: OrdersStatsPriceDTO[] | null;
  /** Информация о складе, на котором хранится товар. */
  warehouse?: OrdersStatsWarehouseDTO;
  /**
   * Информация об удалении товара из заказа.
   * @minItems 1
   */
  details?: OrdersStatsDetailsDTO[] | null;
  /**
   * Список кодов идентификации товара в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) или [:no-translate[«ASL BELGISI»]](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]).
   * @minItems 1
   * @uniqueItems true
   */
  cisList?: string[] | null;
  /**
   * Первоначальное количество единиц товара.
   * @format int32
   */
  initialCount?: number;
  /**
   * Списанная ставка ближайшего конкурента.
   *
   * Указывается в процентах от стоимости товара и умножается на 100. Например, ставка 5% обозначается как 500.
   * @format int32
   * @min 0
   * @max 10000
   * @example 570
   */
  bidFee?: number;
  /**
   * Порог для скидок с Маркетом на момент оформления заказа. [Что это такое?](https://yandex.ru/support/marketplace/marketing/smart-pricing.html#sponsored-discounts)
   *
   * Точность — два знака после запятой.
   */
  cofinanceThreshold?: number;
  /**
   * Скидка с Маркетом. [Что это такое?](https://yandex.ru/support/marketplace/marketing/smart-pricing.html#sponsored-discounts)
   *
   * Точность — два знака после запятой.
   */
  cofinanceValue?: number;
}

/** Информация о платежном поручении. */
export interface OrdersStatsPaymentOrderDTO {
  /** Номер платежного поручения. */
  id?: string;
  /**
   * Дата платежного поручения.
   *
   * Формат даты: `ГГГГ‑ММ‑ДД`.
   * @format date
   */
  date?: string;
}

/** Информация о денежных переводах по заказу. */
export interface OrdersStatsPaymentDTO {
  /** Идентификатор денежного перевода. */
  id?: string;
  /**
   * Дата денежного перевода.
   *
   * Формат даты: `ГГГГ-ММ-ДД`.
   * @format date
   */
  date?: string;
  /** Тип денежного перевода. */
  type?: OrdersStatsPaymentType;
  /** Способ денежного перевода. */
  source?: OrdersStatsPaymentSourceType;
  /**
   * Сумма денежного перевода.
   *
   * Точность — два знака после запятой.
   */
  total?: number;
  /** Информация о платежном поручении. */
  paymentOrder?: OrdersStatsPaymentOrderDTO;
}

/** Информация о стоимости услуг. */
export interface OrdersStatsCommissionDTO {
  /** Услуга. */
  type?: OrdersStatsCommissionType;
  /**
   * Сумма, которая была выставлена в момент создания заказа и которую нужно оплатить.
   * Точность — два знака после запятой.
   */
  actual?: number;
}

/** Информация о начислении баллов, которые используются для уменьшения стоимости размещения, и их списании в случае невыкупа или возврата. */
export interface OrdersStatsSubsidyDTO {
  /** Тип операции c баллами, которые используются для уменьшения стоимости размещения. */
  operationType: OrdersStatsSubsidyOperationType;
  /** Источник баллов, которые используются для уменьшения стоимости размещения. */
  type: OrdersStatsSubsidyType;
  /** Количество баллов, которые используются для уменьшения стоимости размещения, с точностью до двух знаков после запятой. */
  amount: number;
}

/** Информация о заказе. */
export interface OrdersStatsOrderDTO {
  /**
   * Идентификатор заказа.
   * @format int64
   */
  id?: number;
  /**
   * Дата создания заказа.
   *
   * Формат даты: `ГГГГ-ММ-ДД`.
   * @format date
   */
  creationDate?: string;
  /**
   * Дата и время, когда статус заказа был изменен в последний раз.
   *
   * Формат даты и времени: :no-translate[ISO 8601]. Например, `2017-11-21T00:00:00`. Часовой пояс — :no-translate[UTC+03:00] (Москва).
   * @format date-time
   */
  statusUpdateDate?: string;
  /**
   * Текущий статус заказа:
   *
   * * `CANCELLED_BEFORE_PROCESSING` — заказ отменен до начала его обработки.
   *
   * * `CANCELLED_IN_DELIVERY` — заказ отменен во время его доставки.
   *
   * * `CANCELLED_IN_PROCESSING` — заказ отменен во время его обработки.
   *
   * * `DELIVERY` — заказ передан службе доставки.
   *
   * * `DELIVERED` — заказ доставлен.
   *
   * * `PARTIALLY_DELIVERED` — заказ частично доставлен.
   *
   *     {% note warning "Статус заказа может перейти в `PARTIALLY_DELIVERED` не сразу" %}
   *
   *     Если в доставленном заказе был невыкуп, статус изменится только после получения заказа на складе Маркета.
   *
   *     {% endnote %}
   *
   * * `PARTIALLY_RETURNED` — заказ частично возвращен покупателем.
   *
   * * `PENDING` — заказ ожидает подтверждения.
   *
   * * `PICKUP` — заказ доставлен в пункт выдачи.
   *
   * * `PROCESSING` — заказ в обработке.
   *
   * * `RESERVED` — товар зарезервирован на складе.
   *
   * * `RETURNED` — заказ полностью возвращен покупателем.
   *
   * * `UNKNOWN` — неизвестный статус заказа.
   *
   * * `UNPAID` — заказ от юридического лица ожидает оплаты.
   *
   * * `LOST` — заказ утерян.
   */
  status?: OrderStatsStatusType;
  /** Идентификатор заказа в информационной системе магазина. */
  partnerOrderId?: string;
  /** Тип оплаты заказа. */
  paymentType?: OrdersStatsOrderPaymentType;
  /**
   * Тип заказа:
   *
   * * `false` — настоящий заказ покупателя.
   *
   * * `true` — [тестовый](../../concepts/sandbox.md) заказ Маркета.
   */
  fake?: boolean;
  /** Информация о регионе доставки. */
  deliveryRegion?: OrdersStatsDeliveryRegionDTO;
  /**
   * Список товаров в заказе после возможных изменений.
   *
   * Информация о доставке заказа добавляется отдельным элементом в массиве `items`— параметр `offerName` со значением `Доставка`.
   */
  items: OrdersStatsItemDTO[];
  /**
   * Список товаров в заказе.
   *
   * Возвращается, только если было изменение количества товаров.
   * @minItems 1
   */
  initialItems?: OrdersStatsItemDTO[] | null;
  /**
   * Информация о денежных переводах по заказу.
   *
   * Может вернуться пустым, если нет данных о переводах. Например, заказ отменен или выбрана оплата при получении (для модели DBS).
   */
  payments: OrdersStatsPaymentDTO[];
  /** Информация о стоимости услуг. */
  commissions: OrdersStatsCommissionDTO[];
  /**
   * Начисление баллов, которые используются для уменьшения стоимости размещения, и их списание в случае невыкупа или возврата.
   * @minItems 1
   */
  subsidies?: OrdersStatsSubsidyDTO[] | null;
  /** Валюта, в которой указаны цены в заказе. */
  currency: CurrencyType;
}

/** Информация по заказам. */
export interface OrdersStatsDTO {
  /** Список заказов. */
  orders: OrdersStatsOrderDTO[];
  /** Идентификатор следующей страницы. */
  paging?: ForwardScrollingPagerDTO;
}

/** Ответ на запрос информации по заказам. */
export type GetOrdersStatsResponse = ApiResponse & {
  /** Информация по заказам. */
  result?: OrdersStatsDTO;
};

/** Запрос отчета по товарам. */
export interface GetGoodsStatsRequest {
  /**
   * Список ваших идентификаторов :no-translate[SKU].
   * @maxItems 500
   * @minItems 1
   * @uniqueItems true
   */
  shopSkus: ShopSku[];
}

/**
 * Информация о весе и габаритах товара.
 *
 * Если товар уже привязан к карточке (`marketSku`), в ответе вернутся габариты из карточки Маркета, а не размеры, которые вы передаете.
 */
export interface GoodsStatsWeightDimensionsDTO {
  /** Длина товара в сантиметрах. */
  length?: number;
  /** Ширина товара в сантиметрах. */
  width?: number;
  /** Высота товара в сантиметрах. */
  height?: number;
  /** Вес товара в килограммах. */
  weight?: number;
}

/** Информация о складе. */
export interface GoodsStatsWarehouseDTO {
  /**
   * Идентификатор склада.
   * @format int64
   */
  id?: number;
  /** Название склада. */
  name?: string;
  /** Информация об остатках товаров на складе. */
  stocks: WarehouseStockDTO[];
}

/** Детали расчета конкретной услуги Маркета. */
export interface TariffParameterDTO {
  /** Название параметра. */
  name: string;
  /** Значение параметра. */
  value: string;
}

/** Информация о тарифах, по которым нужно заплатить за услуги Маркета. */
export interface TariffDTO {
  /** Услуга Маркета, за которую начисляется тариф. */
  type: TariffType;
  /**
   * Значение тарифа в процентах.
   * @deprecated
   */
  percent?: number;
  /** Значение тарифа. */
  amount: number;
  /** Валюта, в которой указано значение тарифа. */
  currency: CurrencyType;
  /** Параметры расчета тарифа. */
  parameters: TariffParameterDTO[];
}

/** Информация о товаре. */
export interface GoodsStatsGoodsDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  shopSku?: ShopSku;
  /** :no-translate[SKU] на Маркете — идентификатор карточки товара на Маркете. */
  marketSku?: MarketSku;
  /** Название товара. */
  name?: string;
  /** Цена на товар в валюте, которая установлена [в кабинете продавца на Маркете](https://partner.market.yandex.ru/). */
  price?: number;
  /**
   * Идентификатор категории товара на Маркете.
   * @format int64
   */
  categoryId?: number;
  /** Название категории товара на Маркете. */
  categoryName?: string;
  /**
   * Информация о весе и габаритах товара.
   * Если товар уже привязан к карточке (`marketSku`), в ответе вернутся габариты из карточки Маркета, а не размеры, которые вы передаете.
   */
  weightDimensions?: GoodsStatsWeightDimensionsDTO;
  /**
   * Информация о складах, на которых хранится товар.
   *
   * Параметр не приходит, если товара нет ни на одном складе.
   * @minItems 1
   */
  warehouses?: GoodsStatsWarehouseDTO[] | null;
  /**
   * Информация о тарифах, по которым нужно заплатить за услуги Маркета.
   *
   * По некоторым услугам могут возвращаться несколько разных стоимостей. Например, в модели :no-translate[FBS] стоимость услуги `SORTING` (обработка заказа) зависит от способа отгрузки
   * и количества заказов в отгрузке. Подробнее о тарифах на услуги читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/introduction/rates/models/).
   * @minItems 1
   */
  tariffs?: TariffDTO[] | null;
  /**
   * Ссылки (:no-translate[URL]) изображений товара в хорошем качестве.
   * @minItems 1
   * @uniqueItems true
   */
  pictures?: string[] | null;
}

/** Отчет по товарам. */
export interface GoodsStatsDTO {
  /** Список товаров. */
  shopSkus: GoodsStatsGoodsDTO[];
}

/** Ответ на запрос отчета по товарам. */
export type GetGoodsStatsResponse = ApiResponse & {
  /** Отчет по товарам. */
  result?: GoodsStatsDTO;
};

/** Статус генерации и ссылка на готовый отчет или документ. */
export interface ReportInfoDTO {
  /**
   * Статус генерации:
   *
   * * `PENDING` — ожидает генерации.
   * * `PROCESSING` — генерируется.
   * * `FAILED` — во время генерации произошла ошибка.
   * * `DONE` — отчет или документ готов.
   */
  status: ReportStatusType;
  /**
   * Подстатус генерации:
   * * `NO_DATA` — для такого отчета или документа нет данных.
   * * `TOO_LARGE` — отчет или документ превысил допустимый размер — укажите меньший период времени или уточните условия запроса.
   * * `RESOURCE_NOT_FOUND` — для такого отчета или документа не удалось найти часть сущностей.
   */
  subStatus?: ReportSubStatusType;
  /**
   * Дата и время запроса на генерацию.
   * @format date-time
   */
  generationRequestedAt: string;
  /**
   * Дата и время завершения генерации.
   * @format date-time
   */
  generationFinishedAt?: string;
  /** Ссылка на готовый отчет или документ. */
  file?: string;
  /**
   * Ожидаемая продолжительность генерации в миллисекундах.
   * @format int64
   */
  estimatedGenerationTime?: number;
}

/** Ответ на запрос информации об отчете или документе. */
export type GetReportInfoResponse = ApiResponse & {
  /** Статус генерации и ссылка на готовый отчет или документ. */
  result?: ReportInfoDTO;
};

/**
 * Год.
 * @format int32
 * @example 2025
 */
export type Year = number;

/**
 * Номер месяца.
 * @format int32
 * @min 1
 * @max 12
 * @example 12
 */
export type Month = number;

/** Месяц, за который нужен отчет о баллах Маркета. */
export interface MonthOfYearDTO {
  /** Год. */
  year: Year;
  /** Номер месяца. */
  month: Month;
}

/** Данные, необходимые для генерации отчета: идентификатор кампании, период, за который нужен отчет, а также фильтры. */
export interface GenerateUnitedNettingReportRequest {
  /**
   * Идентификатор кабинета.
   * @format int64
   */
  businessId: number;
  /**
   * Начало периода, включительно.
   * @deprecated
   * @format date-time
   */
  dateTimeFrom?: string;
  /**
   * Конец периода, включительно. Максимальный период — 3 месяца.
   * @deprecated
   * @format date-time
   */
  dateTimeTo?: string;
  /**
   * Начало периода, включительно.
   * @format date
   */
  dateFrom?: string;
  /**
   * Конец периода, включительно. Максимальный период — 3 месяца.
   * @format date
   */
  dateTo?: string;
  /**
   * Номер платежного поручения.
   * @format int64
   */
  bankOrderId?: number;
  /**
   * Дата платежного поручения.
   * @format date-time
   */
  bankOrderDateTime?: string;
  /** Месяц, за который нужен отчет о баллах Маркета. */
  monthOfYear?: MonthOfYearDTO;
  /**
   * Список моделей, которые нужны в отчете.
   * @minItems 1
   * @uniqueItems true
   */
  placementPrograms?: PlacementType[] | null;
  /**
   * Список ИНН, которые нужны в отчете.
   * @minItems 1
   * @uniqueItems true
   */
  inns?: string[] | null;
  /**
   * Список идентификаторов кампании тех магазинов, которые нужны в отчете.
   *
   * Их можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не используйте вместо них идентификаторы магазинов, которые указаны в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @minItems 1
   * @uniqueItems true
   */
  campaignIds?: number[] | null;
}

/** Идентификатор, который понадобится для отслеживания статуса генерации и получения готового отчета или документа. */
export interface GenerateReportDTO {
  /** Идентификатор, который понадобится для отслеживания статуса генерации и получения готового отчета или документа. */
  reportId: string;
  /**
   * Ожидаемая продолжительность генерации в миллисекундах.
   * @format int64
   */
  estimatedGenerationTime: number;
}

/** Ответ на запрос генерации отчета или документа. */
export type GenerateReportResponse = ApiResponse & {
  /** Идентификатор, который понадобится для отслеживания статуса генерации и получения готового отчета или документа. */
  result?: GenerateReportDTO;
};

/** Данные, необходимые для генерации отчета: идентификатор кампании, период, за который нужен отчет, а также фильтры. */
export interface GenerateUnitedMarketplaceServicesReportRequest {
  /**
   * Идентификатор кабинета.
   * @format int64
   */
  businessId: number;
  /**
   * Начало периода, включительно.
   * @deprecated
   * @format date-time
   */
  dateTimeFrom?: string;
  /**
   * Конец периода, включительно. Максимальный период — 3 месяца.
   * @deprecated
   * @format date-time
   */
  dateTimeTo?: string;
  /**
   * Начало периода, включительно.
   * @format date
   */
  dateFrom?: string;
  /**
   * Конец периода, включительно. Максимальный период — 3 месяца.
   * @format date
   */
  dateTo?: string;
  /** Начальный год формирования акта. */
  yearFrom?: Year;
  /** Начальный номер месяца формирования акта. */
  monthFrom?: Month;
  /** Конечный год формирования акта. */
  yearTo?: Year;
  /** Конечный номер месяца формирования акта. */
  monthTo?: Month;
  /**
   * Список моделей, которые нужны в отчете.
   * @minItems 1
   * @uniqueItems true
   */
  placementPrograms?: PlacementType[] | null;
  /**
   * Список ИНН, которые нужны в отчете.
   * @minItems 1
   * @uniqueItems true
   */
  inns?: string[] | null;
  /**
   * Список идентификаторов кампании тех магазинов, которые нужны в отчете.
   *
   * Их можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не используйте вместо них идентификаторы магазинов, которые указаны в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @minItems 1
   * @uniqueItems true
   */
  campaignIds?: number[] | null;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateUnitedOrdersRequest {
  /**
   * Идентификатор кабинета.
   * @format int64
   */
  businessId: number;
  /**
   * Начало периода, включительно.
   * @format date
   */
  dateFrom: string;
  /**
   * Конец периода, включительно. Максимальный период — 1 год.
   * @format date
   */
  dateTo: string;
  /**
   * Список идентификаторов кампании тех магазинов, которые нужны в отчете.
   *
   * Их можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не используйте вместо них идентификаторы магазинов, которые указаны в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @minItems 1
   * @uniqueItems true
   */
  campaignIds?: number[] | null;
  /** Идентификатор акции, товары из которой нужны в отчете. */
  promoId?: string;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateUnitedReturnsRequest {
  /**
   * Идентификатор кабинета.
   * @format int64
   */
  businessId: number;
  /**
   * Начало периода, включительно.
   * @format date
   */
  dateFrom: string;
  /**
   * Конец периода, включительно.
   * @format date
   */
  dateTo: string;
  /**
   * Список идентификаторов кампании тех магазинов, которые нужны в отчете.
   *
   * Их можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не используйте вместо них идентификаторы магазинов, которые указаны в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @minItems 1
   * @uniqueItems true
   */
  campaignIds?: number[] | null;
  /**
   * Тип заказа для фильтрации:
   *
   * * `UNREDEEMED` — невыкуп.
   *
   * * `RETURN` — возврат.
   *
   * Если не указывать, в ответе будут и невыкупы, и возвраты.
   */
  returnType?: ReturnType | null;
  /**
   * Статусы передачи возвратов, которые нужны в отчете.
   *
   * Если их не указать, вернется информация по всем возвратам.
   * @minItems 1
   * @uniqueItems true
   */
  returnStatusTypes?: ReturnShipmentStatusType[] | null;
}

/** Данные, необходимые для генерации отчета: идентификатор кампании и период, за который нужен отчет. */
export interface GenerateGoodsRealizationReportRequest {
  /**
   * Идентификатор кампании.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   */
  campaignId: number;
  /** Год. */
  year: Year;
  /** Номер месяца. */
  month: Month;
}

/** Данные, необходимые для генерации отчета. */
export interface GeneratePricesReportRequest {
  /**
   * Идентификатор кабинета.
   *
   * В большинстве случаев обязателен. Не указывается, если задан `campaignId`.
   * @format int64
   */
  businessId?: number;
  /**
   * Идентификатор кампании.
   *
   * Передавайте, только если в кабинете есть магазины с уникальными ценами и вы хотите получить отчет для них. В этом случае передавать `businessId` не нужно.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   */
  campaignId?: number;
  /**
   * Фильтр по категориям на Маркете.
   * @minItems 1
   * @uniqueItems true
   */
  categoryIds?: number[] | null;
  /**
   * Фильтр по времени появления предложения — начало периода.
   *
   * Формат даты: `ДД-ММ-ГГГГ`.
   * @format date
   */
  creationDateFrom?: string;
  /**
   * Фильтр по времени появления предложения — окончание периода.
   *
   * Формат даты: `ДД-ММ-ГГГГ`.
   * @format date
   */
  creationDateTo?: string;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateStocksOnWarehousesReportRequest {
  /**
   *
   * {% note warning "Отчет об остатках на конкретном складе магазина скоро станет недоступен." %}
   *
   *
   *
   * {% endnote %}
   *
   * Идентификатор кампании.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   *
   * Не передавайте вместе с `businessId`.
   * @format int64
   */
  campaignId?: number;
  /**
   * Идентификатор кабинета, по магазинам которого нужно сформировать отчет (кроме :no-translate[FBY]-магазинов).
   *
   * Не передавайте вместе с `campaignId`.
   * @format int64
   */
  businessId?: number;
  /**
   * Фильтр по идентификаторам складов (только модель :no-translate[FBY]). Чтобы узнать идентификатор, воспользуйтесь запросом [GET warehouses](../../reference/warehouses/getFulfillmentWarehouses.md).
   * @minItems 1
   * @uniqueItems true
   */
  warehouseIds?: number[] | null;
  /**
   * Фильтр по дате (для модели :no-translate[FBY]). В отчет попадут данные за **предшествующий** дате день.
   * @format date
   */
  reportDate?: string;
  /**
   * Фильтр по категориям на Маркете (кроме модели :no-translate[FBY]).
   * @minItems 1
   * @uniqueItems true
   */
  categoryIds?: number[] | null;
  /** Фильтр по наличию остатков (кроме модели :no-translate[FBY]). */
  hasStocks?: boolean;
  /**
   * Фильтр по магазинам для отчета по кабинету (кроме модели :no-translate[FBY]).
   *
   * Передавайте вместе с `businessId`.
   * @minItems 1
   * @uniqueItems true
   */
  campaignIds?: number[] | null;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateGoodsMovementReportRequest {
  /**
   * Идентификатор кампании.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   * @min 1
   */
  campaignId: number;
  /**
   * Начало периода, включительно. Формат даты: `ГГГГ-ММ-ДД`.
   * @format date
   * @example "2022-09-22"
   */
  dateFrom: string;
  /**
   * Конец периода, включительно. Формат даты: `ГГГГ-ММ-ДД`.
   * @format date
   * @example "2022-09-23"
   */
  dateTo: string;
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  shopSku?: ShopSku;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateShowsSalesReportRequest {
  /**
   * Идентификатор кабинета.
   *
   * Указывается, если нужно составить отчет по всем магазинам в кабинете. В запросе обязательно должен быть либо `businessId`, либо `campaignId`, но не оба сразу.
   * @format int64
   */
  businessId?: number;
  /**
   * Идентификатор кампании.
   *
   * Указывается, если нужно составить отчет по конкретному магазину. В запросе обязательно должен быть либо `businessId`, либо `campaignId`, но не оба сразу.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   */
  campaignId?: number;
  /**
   * Начало периода, включительно.
   * @format date
   */
  dateFrom: string;
  /**
   * Конец периода, включительно.
   * @format date
   */
  dateTo: string;
  /** Группировка данных отчета. */
  grouping: ShowsSalesGroupingType;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateCompetitorsPositionReportRequest {
  /**
   * Идентификатор кабинета.
   * @format int64
   */
  businessId: number;
  /**
   * Идентификатор категории.
   * @format int64
   */
  categoryId: number;
  /**
   * Начало периода, включительно.
   * @format date
   */
  dateFrom: string;
  /**
   * Конец периода, включительно.
   * @format date
   */
  dateTo: string;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateGoodsTurnoverRequest {
  /**
   * Идентификатор кампании.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   */
  campaignId: number;
  /**
   * Дата, за которую нужно рассчитать оборачиваемость. Если параметр не указан, используется текущая дата.
   * @format date
   */
  date?: string;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateBoostConsolidatedRequest {
  /**
   * Идентификатор кабинета.
   * @format int64
   */
  businessId: number;
  /**
   * Начало периода, включительно.
   * @format date
   */
  dateFrom: string;
  /**
   * Конец периода, включительно.
   * @format date
   */
  dateTo: string;
}

/** Данные, необходимые для генерации документа. */
export interface GenerateShipmentListDocumentReportRequest {
  /**
   * Идентификатор кампании.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   */
  campaignId: number;
  /**
   * Идентификатор отгрузки.
   *
   * В запросе обязательно передавайте `shipmentId` или `orderIds`.
   * @format int64
   */
  shipmentId?: number;
  /**
   * Фильтр по идентификаторам заказа в отгрузке.
   *
   * В запросе обязательно передавайте `shipmentId` или `orderIds`.
   * @minItems 1
   * @uniqueItems true
   */
  orderIds?: number[] | null;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateShelfsStatisticsRequest {
  /**
   * Идентификатор кабинета.
   * @format int64
   */
  businessId: number;
  /**
   * Начало периода, включительно.
   * @format date
   */
  dateFrom: string;
  /**
   * Конец периода, включительно.
   * @format date
   */
  dateTo: string;
  /** Тип атрибуции. */
  attributionType: StatisticsAttributionType;
}

/** Данные, необходимые для генерации файла. */
export interface GenerateMassOrderLabelsRequest {
  /**
   * Идентификатор кабинета.
   * @format int64
   */
  businessId: number;
  /**
   * Список идентификаторов заказов.
   * @maxItems 1000
   * @minItems 1
   * @uniqueItems true
   */
  orderIds: number[];
  /** Тип сортировки ярлыков в файле. */
  sortingType?: LabelsSortingType;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateGoodsFeedbackRequest {
  /**
   * Идентификатор кабинета.
   * @format int64
   */
  businessId: number;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateShowsBoostRequest {
  /**
   * Идентификатор кабинета.
   * @format int64
   */
  businessId: number;
  /**
   * Начало периода, включительно.
   * @format date
   */
  dateFrom: string;
  /**
   * Конец периода, включительно.
   * @format date
   */
  dateTo: string;
  /** Тип атрибуции. */
  attributionType: StatisticsAttributionType;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateBannersStatisticsRequest {
  /**
   * Идентификатор кабинета.
   * @format int64
   */
  businessId: number;
  /**
   * Начало периода, включительно.
   * @format date
   */
  dateFrom: string;
  /**
   * Конец периода, включительно.
   * @format date
   */
  dateTo: string;
}

/** Месяц и год. */
export interface ClosureDocumentsMonthOfYearDTO {
  /**
   * Год.
   * @format int32
   * @example 2025
   */
  year: number;
  /** Номер месяца. */
  month: Month;
}

/** Данные, необходимые для запроса закрывающих документов. */
export interface GenerateClosureDocumentsRequest {
  /**
   * Идентификатор кампании.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   */
  campaignId: number;
  /** Месяц, за который нужны закрывающие документы. */
  monthOfYear: ClosureDocumentsMonthOfYearDTO;
  /**
   * Типы договоров, по которым нужны закрывающие документы.
   *
   * Если их не указать, вернется архив с документами по всем найденным договорам.
   * @maxItems 3
   * @minItems 1
   * @uniqueItems true
   */
  contractTypes?: ClosureDocumentsContractType[] | null;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateJewelryFiscalReportRequest {
  /**
   * Идентификатор кампании.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   */
  campaignId: number;
  /**
   * Начало периода, включительно.
   * @format date
   */
  dateFrom: string;
  /**
   * Конец периода, включительно.
   * @format date
   */
  dateTo: string;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateSalesGeographyRequest {
  /**
   * Идентификатор кабинета.
   * @format int64
   */
  businessId: number;
  /**
   * Начало периода, включительно.
   * @format date
   */
  dateFrom: string;
  /**
   * Конец периода, включительно.
   * @format date
   */
  dateTo: string;
  /**
   * Идентификаторы категорий.
   * @maxItems 1000
   * @minItems 1
   * @uniqueItems true
   */
  categoryIds?: number[] | null;
  /**
   * Идентификаторы товаров.
   * @maxItems 1000
   * @minItems 1
   * @uniqueItems true
   */
  offerIds?: ShopSku[] | null;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateKeyIndicatorsRequest {
  /**
   * Идентификатор кабинета.
   *
   * Указывается, если нужно составить отчет по всем магазинам в кабинете. В запросе обязательно должен быть либо `businessId`, либо `campaignId`, но не оба сразу.
   * @format int64
   */
  businessId?: number;
  /**
   * Идентификатор кампании.
   *
   * Указывается, если нужно составить отчет по конкретному магазину. В запросе обязательно должен быть либо `businessId`, либо `campaignId`, но не оба сразу.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   */
  campaignId?: number;
  /** За какой период нужна детализация. */
  detalizationLevel: KeyIndicatorsReportDetalizationLevelType;
}

/** Данные, необходимые для генерации отчета. */
export interface GenerateClosureDocumentsDetalizationRequest {
  /**
   * Идентификатор кампании.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   */
  campaignId: number;
  /** Месяц, за который сформированы необходимые закрывающие документы. */
  monthOfYear: ClosureDocumentsMonthOfYearDTO;
  /** Тип договора, по которому нужно сгенерировать отчет по схождению с закрывающими документами. */
  contractType: ClosureDocumentsContractType;
}

/** Адрес точки продаж. */
export interface OutletAddressDTO {
  /**
   * Идентификатор региона.
   *
   * Идентификатор можно получить c помощью запроса [GET regions](../../reference/regions/searchRegionsByName.md).
   *
   * {% note alert "Типы регионов при создании и редактировании точек продаж" %}
   *
   * Указывайте только регионы типов `TOWN` (город), `CITY` (крупный город) и `REPUBLIC_AREA` (район субъекта федерации). Тип региона указан в выходных параметрах `type` запросов [GET regions](../../reference/regions/searchRegionsByName.md) и [GET regions/{regionId}](../../reference/regions/searchRegionsById.md).
   *
   * {% endnote %}
   * @format int64
   */
  regionId: number;
  /**
   * Улица.
   * @maxLength 512
   */
  street?: string;
  /**
   * Номер дома.
   * @maxLength 256
   */
  number?: string;
  /**
   * Номер строения.
   * @maxLength 16
   */
  building?: string;
  /**
   * Номер владения.
   * @maxLength 16
   */
  estate?: string;
  /**
   * Номер корпуса.
   * @maxLength 16
   */
  block?: string;
  /** Дополнительная информация. */
  additional?: string;
  /**
   * Порядковый номер километра дороги, на котором располагается точка продаж, если отсутствует улица.
   * @format int32
   */
  km?: number;
  /**
   * {% note warning "В ответах города и населенные пункты возвращаются в параметре `regionId`." %}
   *
   *
   *
   * {% endnote %}
   * @deprecated
   * @maxLength 200
   */
  city?: string;
}

/** Расписание работы точки продаж. */
export interface OutletWorkingScheduleItemDTO {
  /**
   * Точка продаж работает с указанного дня недели.
   *
   * Возможные значения:
   *
   * * `MONDAY` — понедельник.
   * * `TUESDAY` — вторник.
   * * `WEDNESDAY` — среда.
   * * `THURSDAY` — четверг.
   * * `FRIDAY` — пятница.
   * * `SATURDAY` — суббота.
   * * `SUNDAY` — воскресенье.
   */
  startDay: DayOfWeekType;
  /**
   * Точка продаж работает до указанного дня недели.
   *
   * Возможные значения:
   *
   * * `MONDAY` — понедельник.
   * * `TUESDAY` — вторник.
   * * `WEDNESDAY` — среда.
   * * `THURSDAY` — четверг.
   * * `FRIDAY` — пятница.
   * * `SATURDAY` — суббота.
   * * `SUNDAY` — воскресенье.
   */
  endDay: DayOfWeekType;
  /**
   * Точка продаж работает c указанного часа.
   *
   * Формат: `ЧЧ:ММ`.
   * @pattern ^([0-1][0-9]|2[0-3]):[0-5][0-9]$
   * @example "09:59"
   */
  startTime: string;
  /**
   * Точка продаж работает до указанного часа.
   *
   * Формат: `ЧЧ:ММ`.
   * @pattern ^([0-1][0-9]|2[0-3]):[0-5][0-9]$
   * @example "23:59"
   */
  endTime: string;
}

/** Список режимов работы точки продаж. */
export interface OutletWorkingScheduleDTO {
  /**
   * Признак, работает ли точка продаж в дни государственных праздников.
   *
   * Возможные значения:
   *
   * * `false` — точка продаж не работает в дни государственных праздников.
   * * `true` — точка продаж работает в дни государственных праздников.
   */
  workInHoliday?: boolean;
  /**
   * Список расписаний работы точки продаж.
   * @minItems 1
   */
  scheduleItems: OutletWorkingScheduleItemDTO[];
}

/** Информация об условиях доставки для данной точки продаж. */
export interface OutletDeliveryRuleDTO {
  /**
   * Минимальный срок доставки товаров в точку продаж. Указан в рабочих днях.
   *
   * Минимальное значение: `0` — доставка в день заказа.
   *
   * Максимальное значение: `60`.
   *
   * Допустимые сроки доставки (разница между `minDeliveryDays` и `maxDeliveryDays`) зависят от региона.
   *
   * Для доставки по своему региону разница не должна превышать двух дней. Например, если `minDeliveryDays` равно 1, то для `maxDeliveryDays` допускаются значения от 1 до 3.
   *
   * Для доставки в другие регионы:
   *
   * * Если `minDeliveryDays` до 18 дней, разница не должна превышать четырех дней. Например, если `minDeliveryDays` равно 10, то для `maxDeliveryDays` допускаются значения от 10 до 14.
   * * Если `minDeliveryDays` больше 18 дней, разница должна быть не больше чем в два раза. Например, если `minDeliveryDays` равно 21, то для `maxDeliveryDays` допускаются значения от 21 до 42.
   *
   * Обязательный параметр, если `type="DEPOT"` или `type="MIXED"`.
   *
   * Взаимоисключающий с параметром `unspecifiedDeliveryInterval`.
   * @format int32
   * @min 0
   * @max 60
   */
  minDeliveryDays?: number;
  /**
   * Максимальный срок доставки товаров в точку продаж. Указан в рабочих днях.
   *
   * Минимальное значение: `0` — доставка в день заказа.
   *
   * Максимальное значение: `60`.
   *
   * Допустимые сроки доставки (разница между `minDeliveryDays` и `maxDeliveryDays`) зависят от региона.
   *
   * Для доставки по своему региону разница не должна превышать двух дней. Например, если `minDeliveryDays` равно 1, то для `maxDeliveryDays` допускаются значения от 1 до 3.
   *
   * Для доставки в другие регионы:
   *
   * * Если `minDeliveryDays` до 18 дней, разница не должна превышать четырех дней. Например, если `minDeliveryDays` равно 10, то для `maxDeliveryDays` допускаются значения от 10 до 14.
   * * Если `minDeliveryDays` больше 18 дней, разница должна быть не больше чем в два раза. Например, если `minDeliveryDays` равно 21, то для `maxDeliveryDays` допускаются значения от 21 до 42.
   *
   * Обязательный параметр, если `type="DEPOT"` или `type="MIXED"`.
   *
   * Взаимоисключающий с параметром `unspecifiedDeliveryInterval`.
   * @format int32
   * @min 0
   * @max 60
   */
  maxDeliveryDays?: number;
  /**
   * Идентификатор службы доставки товаров в точку продаж.
   *
   * Информацию о службе доставки можно получить с помощью запроса [GET delivery/services](../../reference/orders/getDeliveryServices.md).
   * @format int64
   */
  deliveryServiceId?: number;
  /**
   * Час, до которого покупателю нужно сделать заказ, чтобы он был доставлен в точку продаж в сроки от `minDeliveryDays` до `maxDeliveryDays`.
   *
   * Если покупатель оформит заказ после указанного часа, он будет доставлен в сроки от `minDeliveryDays` + 1 рабочий день до `maxDeliveryDays` + 1 рабочий день.
   *
   * Значение по умолчанию: `24`.
   * @format int32
   * @min 0
   * @max 24
   */
  orderBefore?: number;
  /** Цена на товар, начиная с которой действует бесплатный самовывоз товара из точки продаж. */
  priceFreePickup?: number;
  /**
   * Признак доставки товаров в точку продаж на заказ.
   *
   * Признак выставлен, если:
   *
   * * точный срок доставки в точку продаж заранее неизвестен (например, если магазин собирает несколько заказов для отправки в точку или населенный пункт);
   * * все товары изготавливаются или поставляются на заказ.
   *
   * Возможные значения:
   * * `true` — товары доставляются в точку продаж на заказ.
   *
   * Параметр указывается только со значением `true`.
   *
   * Взаимоисключающий с параметрами `minDeliveryDays` и `maxDeliveryDays`.
   */
  unspecifiedDeliveryInterval?: boolean;
}

/** Информация о точке продаж. */
export interface OutletDTO {
  /** Название точки продаж. */
  name: string;
  /**
   * Тип точки продаж.
   *
   * Возможные значения:
   *
   * * `DEPOT` — пункт выдачи заказов.
   * * `MIXED` — смешанный тип точки продаж (торговый зал и пункт выдачи заказов).
   * * `RETAIL` — розничная точка продаж (торговый зал).
   * * `NOT_DEFINED` — неизвестный тип точки продажи. При определении типа произошла ошибка.
   */
  type: OutletType;
  /**
   * Координаты точки продаж.
   *
   * Формат: долгота, широта. Разделители: запятая и / или пробел. Например, `20.4522144, 54.7104264`.
   *
   * Если параметр не передан, координаты будут определены по значениям параметров, вложенных в `address`.
   */
  coords?: string;
  /**
   * Признак основной точки продаж.
   *
   * Возможные значения:
   *
   * * `false` — неосновная точка продаж.
   * * `true` — основная точка продаж.
   */
  isMain?: boolean;
  /** Идентификатор точки продаж, присвоенный магазином. */
  shopOutletCode?: string;
  /**
   * Состояние точки продаж.
   *
   * Возможные значения:
   *
   * * `HIDDEN` — точка продаж выключена.
   * * `VISIBLE` — точка продаж включена.
   * * `UNKNOWN` — неизвестное состояние точки продажи. При определении состояния произошла ошибка.
   */
  visibility?: OutletVisibilityType;
  /** Адрес точки продаж. */
  address: OutletAddressDTO;
  /**
   * Номера телефонов точки продаж. Передавайте в формате: `+7 (999) 999-99-99`.
   * @minItems 1
   * @uniqueItems true
   */
  phones: string[];
  /** Список режимов работы точки продаж. */
  workingSchedule: OutletWorkingScheduleDTO;
  /**
   * Информация об условиях доставки для данной точки продаж.
   *
   * Обязательный параметр, если параметр `type=DEPOT` или `type=MIXED`.
   * @minItems 1
   */
  deliveryRules?: OutletDeliveryRuleDTO[] | null;
  /**
   * Срок хранения заказа в собственном пункте выдачи заказов. Считается в днях.
   * @format int64
   */
  storagePeriod?: number;
}

/** Информация о точке продаж. */
export type FullOutletDTO = OutletDTO & {
  /**
   * Идентификатор точки продаж, присвоенный Маркетом.
   * @format int64
   */
  id: number;
  /**
   * Статус точки продаж.
   *
   * Возможные значения:
   *
   * * `AT_MODERATION` — проверяется.
   * * `FAILED` — не прошла проверку и отклонена модератором.
   * * `MODERATED` — проверена и одобрена.
   * * `NONMODERATED` — новая точка, нуждается в проверке.
   * * `UNKNOWN` — статус не указан. При определении статуса произошла ошибка.
   */
  status?: OutletStatusType;
  /** Регион доставки. */
  region?: RegionDTO;
  /**
   * {% note warning "Вместо него используйте `shopOutletCode`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Идентификатор точки продаж, заданный магазином.
   * @deprecated
   */
  shopOutletId?: string;
  /**
   * {% note warning "Вместо него используйте `workingSchedule`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Рабочее время.
   * @deprecated
   */
  workingTime?: string;
  /** Статус модерации. */
  moderationReason?: string;
};

/** Ответ на запрос информации о точках продаж. */
export interface GetOutletsResponse {
  /** Информация о точках продаж. */
  outlets: FullOutletDTO[];
  /** Информация о страницах результатов. */
  paging?: ScrollingPagerDTO;
  /** Модель для пагинации. */
  pager?: FlippingPagerDTO;
}

export type ChangeOutletRequest = OutletDTO;

/**
 * Результат выполнения запроса.
 * Выводится, если `status="OK"`.
 */
export interface OutletResponseDTO {
  /**
   * Идентификатор точки продаж, присвоенный Маркетом.
   * @format int64
   */
  id?: number;
}

/** Ответ на запрос о создании точки продаж. */
export type CreateOutletResponse = ApiResponse & {
  /**
   * Результат выполнения запроса.
   * Выводится, если `status="OK"`.
   */
  result?: OutletResponseDTO;
};

/** Ответ на запрос информации о точке продаж. */
export interface GetOutletResponse {
  /** Информация о точке продаж. */
  outlet?: FullOutletDTO;
}

/** Информация о лицензии. */
export interface OutletLicenseDTO {
  /**
   * Идентификатор лицензии.
   *
   * Параметр указывается, только если нужно изменить информацию о существующей лицензии. Ее идентификатор можно узнать с помощью запроса [GET campaigns/{campaignId}/outlets/licenses](../../reference/outlets/getOutletLicenses.md). При передаче информации о новой лицензии указывать идентификатор не нужно.
   *
   * Идентификатор лицензии присваивается Маркетом. Не путайте его с номером, указанным на лицензии: он передается в параметре `number`.
   * @format int64
   */
  id?: number;
  /**
   * Идентификатор точки продаж, для которой действительна лицензия.
   * @format int64
   * @min 1
   */
  outletId: number;
  /**
   * Тип лицензии:
   *
   * * `ALCOHOL` — лицензия на розничную продажу алкогольной продукции.
   * * `UNKNOWN` — неизвестный тип лицензии.
   */
  licenseType: LicenseType;
  /** Номер лицензии. */
  number: string;
  /**
   * Дата выдачи лицензии.
   *
   * Формат даты: :no-translate[ISO 8601] со смещением относительно :no-translate[UTC]. Нужно передать дату, указанную на лицензии, время `00:00:00` и часовой пояс, соответствующий региону точки продаж. Например, если лицензия для точки продаж в Москве выдана 13 ноября 2017 года, то параметр должен иметь значение `2017-11-13T00:00:00+03:00`.
   *
   * Не может быть позже даты окончания срока действия, указанной в параметре `dateOfExpiry`.
   * @format date-time
   * @example "2017-11-13T00:00:00+03:00"
   */
  dateOfIssue: string;
  /**
   * Дата окончания действия лицензии.
   *
   * Формат даты: :no-translate[ISO 8601] со смещением относительно :no-translate[UTC]. Нужно передать дату, указанную на лицензии, время `00:00:00` и часовой пояс, соответствующий региону точки продаж. Например, если действие лицензии для точки продаж в Москве заканчивается 20 ноября 2022 года, то параметр должен иметь значение `2022-11-20T00:00:00+03:00`.
   *
   * Не может быть раньше даты выдачи, указанной в параметре `dateOfIssue`.
   * @format date-time
   * @example "2022-11-20T00:00:00+03:00"
   */
  dateOfExpiry: string;
}

/** Информация о лицензии. */
export type FullOutletLicenseDTO = OutletLicenseDTO & {
  /**
   * Статус проверки лицензии:
   *
   * * `NEW` — лицензия проверяется.
   * * `SUCCESS` — лицензия прошла проверку.
   * * `FAIL` — лицензия не прошла проверку.
   * * `REVOKE` — лицензия отозвана службой качества.
   * * `DONT_WANT` — не проверяется.
   * * `FAIL_MANUAL` — лицензия не прошла проверку службы качества.
   */
  checkStatus?: LicenseCheckStatusType;
  /**
   * Причина, по которой лицензия не прошла проверку.
   *
   * Параметр возвращается, только если параметр `checkStatus` имеет значение `FAIL`.
   */
  checkComment?: string;
};

/** Ответ на запрос информации о лицензиях для точек продаж. */
export interface OutletLicensesResponseDTO {
  /** Список лицензий. */
  licenses: FullOutletLicenseDTO[];
}

export type GetOutletLicensesResponse = ApiResponse & {
  /** Ответ на запрос информации о лицензиях для точек продаж. */
  result?: OutletLicensesResponseDTO;
};

/** Запрос на создание или изменение лицензий для точек продаж. */
export interface UpdateOutletLicenseRequest {
  /**
   * Список лицензий.
   * Обязательный параметр, должен содержать информацию хотя бы об одной лицензии.
   * @minItems 1
   */
  licenses: OutletLicenseDTO[];
}

/**
 * Идентификатор отзыва.
 * @format int64
 */
export type GoodsFeedbackId = number;

/** Фильтр запроса отзывов в кабинете. */
export interface GetGoodsFeedbackRequest {
  /**
   * Идентификаторы отзывов.
   *
   * ⚠️ Не используйте это поле одновременно с другими фильтрами. Если вы хотите воспользоваться ими, оставьте поле пустым.
   * @maxItems 50
   * @minItems 1
   * @uniqueItems true
   */
  feedbackIds?: GoodsFeedbackId[] | null;
  /**
   * Начало периода. Не включительно.
   *
   * Если параметр не указан, возвращается информация за 6 месяцев до указанной в `dateTimeTo` даты.
   * @format date-time
   */
  dateTimeFrom?: string;
  /**
   * Конец периода. Не включительно.
   *
   * Если параметр не указан, используется текущая дата.
   * @format date-time
   */
  dateTimeTo?: string;
  /**
   * Нужно ли вернуть только непрочитанные отзывы. Для этого передайте значение `NEED_REACTION`.
   *
   * По умолчанию возвращаются все отзывы.
   */
  reactionStatus?: FeedbackReactionStatusType;
  /**
   * Оценка товара.
   * @maxItems 5
   * @minItems 1
   * @uniqueItems true
   */
  ratingValues?: number[] | null;
  /**
   * Фильтр по идентификатору модели товара.
   *
   * Получить идентификатор модели можно с помощью одного из запросов:
   *
   * * [POST businesses/{businessId}/offer-mappings](../../reference/business-assortment/getOfferMappings.md);
   *
   * * [POST businesses/{businessId}/offer-cards](../../reference/content/getOfferCardsContentStatus.md).
   * @deprecated
   * @maxItems 20
   * @minItems 1
   * @uniqueItems true
   */
  modelIds?: number[] | null;
  /** Фильтр отзывов за баллы Плюса. */
  paid?: boolean;
}

/** Идентификаторы, которые связаны с отзывом. */
export interface GoodsFeedbackIdentifiersDTO {
  /**
   * Идентификатор заказа на Маркете.
   * @format int64
   */
  orderId?: number;
  /**
   * Идентификатор модели товара.
   * @deprecated
   * @format int64
   */
  modelId?: number;
}

/** Текстовая часть отзыва. */
export interface GoodsFeedbackDescriptionDTO {
  /** Описание плюсов товара в отзыве. */
  advantages?: string;
  /** Описание минусов товара в отзыве. */
  disadvantages?: string;
  /** Комментарий в отзыве. */
  comment?: string;
}

/** Фото и видео. */
export interface GoodsFeedbackMediaDTO {
  /**
   * Ссылки на фото.
   * @minItems 1
   * @uniqueItems true
   */
  photos?: string[] | null;
  /**
   * Ссылки на видео.
   * @minItems 1
   * @uniqueItems true
   */
  videos?: string[] | null;
}

/** Статистическая информация по отзыву. */
export interface GoodsFeedbackStatisticsDTO {
  /**
   * Оценка товара.
   * @format int32
   * @min 1
   * @max 5
   */
  rating: number;
  /**
   * Количество комментариев к отзыву.
   *
   * Учитываются только ответы на отзывы, а не дочерние комментарии.
   * @format int64
   */
  commentsCount: number;
  /** Рекомендуют ли этот товар. */
  recommended?: boolean;
  /**
   * Количество баллов Плюса, которое автор получил за отзыв.
   * @format int64
   */
  paidAmount?: number;
}

/** Отзыв о товаре. */
export interface GoodsFeedbackDTO {
  /** Идентификатор отзыва. */
  feedbackId: GoodsFeedbackId;
  /**
   * Дата и время создания отзыва.
   * @format date-time
   */
  createdAt: string;
  /**
   * Прочитан ли отзыв.
   *
   * Принимает значение `false`, если магазин:
   *
   * * Прочитал отзыв в кабинете продавца на Маркете.
   * * Отметил отзыв прочитанным — метод [POST businesses/{businessId}/goods-feedback/skip-reaction](../../reference/goods-feedback/skipGoodsFeedbacksReaction.md).
   * * Оставил комментарий к отзыву — метод [POST businesses/{businessId}/goods-feedback/comments/update](../../reference/goods-feedback/updateGoodsFeedbackComment.md).
   */
  needReaction: boolean;
  /** Идентификаторы, которые связаны с отзывом. */
  identifiers: GoodsFeedbackIdentifiersDTO;
  /** Имя автора отзыва. */
  author?: string;
  /** Текстовая часть отзыва. */
  description?: GoodsFeedbackDescriptionDTO;
  /** Фото и видео. */
  media?: GoodsFeedbackMediaDTO;
  /** Статистическая информация по отзыву. */
  statistics: GoodsFeedbackStatisticsDTO;
}

/** Список отзывов о товарах. */
export interface GoodsFeedbackListDTO {
  /** Список отзывов. */
  feedbacks: GoodsFeedbackDTO[];
  /** Идентификатор следующей страницы. */
  paging?: ForwardScrollingPagerDTO;
}

export type GetGoodsFeedbackResponse = ApiResponse & {
  /** Список отзывов о товарах. */
  result?: GoodsFeedbackListDTO;
};

/** Идентификаторы отзывов. */
export interface SkipGoodsFeedbackReactionRequest {
  /**
   * Список идентификаторов отзывов, на которые магазин не будет отвечать.
   * @maxItems 50
   * @minItems 1
   * @uniqueItems true
   */
  feedbackIds: GoodsFeedbackId[];
}

/**
 * Идентификатор комментария к отзыву.
 * @format int64
 */
export type GoodsFeedbackCommentId = number;

/**
 * Текст комментария.
 * @minLength 1
 * @maxLength 4096
 */
export type GoodsFeedbackCommentText = string;

/** Комментарий к отзыву или другому комментарию. */
export interface UpdateGoodsFeedbackCommentDTO {
  /**
   * Идентификатор комментария, который нужно изменить.
   *
   * Оставьте поле пустым, если хотите добавить новый комментарий.
   */
  id?: GoodsFeedbackCommentId;
  /** Идентификатор родительского комментария, на который нужно ответить. */
  parentId?: GoodsFeedbackCommentId;
  /** Текст комментария. */
  text: GoodsFeedbackCommentText;
}

/** Комментарий к отзыву. */
export interface UpdateGoodsFeedbackCommentRequest {
  /** Идентификатор отзыва. */
  feedbackId: GoodsFeedbackId;
  /** Параметры комментария. */
  comment: UpdateGoodsFeedbackCommentDTO;
}

/** Информация об авторе комментария. */
export interface GoodsFeedbackCommentAuthorDTO {
  /**
   * Тип автора:
   *
   * * `USER` — пользователь.
   * * `BUSINESS` — кабинет.
   */
  type?: GoodsFeedbackCommentAuthorType;
  /** Имя автора или название кабинета. */
  name?: string;
}

/** Комментарий к отзыву. */
export interface GoodsFeedbackCommentDTO {
  /** Идентификатор комментария к отзыву. */
  id: GoodsFeedbackCommentId;
  /** Текст комментария. */
  text: GoodsFeedbackCommentText;
  /** Может ли продавец изменять комментарий или удалять его. */
  canModify?: boolean;
  /** Идентификатор родительского комментария. */
  parentId?: GoodsFeedbackCommentId;
  /** Информация об авторе комментария. */
  author?: GoodsFeedbackCommentAuthorDTO;
  /**
   * Статус комментария:
   *
   * * `PUBLISHED` — опубликован.
   * * `UNMODERATED` — не проверен.
   * * `BANNED` — заблокирован.
   * * `DELETED` — удален.
   */
  status: GoodsFeedbackCommentStatusType;
  /** Идентификатор отзыва. */
  feedbackId: GoodsFeedbackId;
}

export type UpdateGoodsFeedbackCommentResponse = ApiResponse & {
  /** Комментарий к отзыву. */
  result?: GoodsFeedbackCommentDTO;
};

/** Фильтр запроса отзывов по бизнесу. */
export interface DeleteGoodsFeedbackCommentRequest {
  /** Идентификатор комментария к отзыву. */
  id: GoodsFeedbackCommentId;
}

/** Фильтр запроса комментариев отзыва. */
export interface GetGoodsFeedbackCommentsRequest {
  /** Идентификатор отзыва. */
  feedbackId?: GoodsFeedbackId;
  /**
   * Идентификаторы комментариев.
   *
   * ⚠️ Не используйте это поле одновременно с другими фильтрами. Если вы хотите воспользоваться ими, оставьте поле пустым.
   * @maxItems 50
   * @minItems 1
   * @uniqueItems true
   */
  commentIds?: GoodsFeedbackCommentId[] | null;
}

/** Комментарии к отзыву. */
export interface GoodsFeedbackCommentListDTO {
  /** Список комментариев. */
  comments: GoodsFeedbackCommentDTO[];
  /** Идентификатор следующей страницы. */
  paging?: ForwardScrollingPagerDTO;
}

export type GetGoodsFeedbackCommentsResponse = ApiResponse & {
  /** Комментарии к отзыву. */
  result?: GoodsFeedbackCommentListDTO;
};

/**
 * Фильтрации товаров
 *
 * В запросе можно указать либо фильтр offerIds, либо любые другие фильтры товаров. Совместное использование фильтра `offerIds` с другими фильтрациями приведет к ошибке.
 */
export interface GetCampaignOffersRequest {
  /**
   * Идентификаторы товаров, информация о которых нужна.
   *
   * {% note warning "Такой список возвращается только целиком" %}
   *
   * Не используйте это поле одновременно с фильтрами по статусам карточек, категориям, брендам или тегам. Если вы хотите воспользоваться фильтрами, оставьте поле пустым.
   *
   * Если вы запрашиваете информацию по конкретным :no-translate[SKU], не заполняйте:
   *
   * * `page_token`
   * * `limit`
   *
   * {% endnote %}
   *
   *
   * @maxItems 200
   * @minItems 1
   * @uniqueItems true
   */
  offerIds?: ShopSku[] | null;
  /**
   * Фильтр по статусам товаров.
   * @minItems 1
   * @uniqueItems true
   */
  statuses?: OfferCampaignStatusType[] | null;
  /**
   * Фильтр по категориям на Маркете.
   * @minItems 1
   * @uniqueItems true
   */
  categoryIds?: number[] | null;
  /**
   * Фильтр по брендам.
   * @minItems 1
   * @uniqueItems true
   */
  vendorNames?: string[] | null;
  /**
   * Фильтр по тегам.
   * @minItems 1
   * @uniqueItems true
   */
  tags?: string[] | null;
}

/**
 * Настройка продажи квантами.
 *
 * Чтобы сбросить установленные ранее значения, передайте пустой параметр `quantum`.
 *
 * {% cut "Пример" %}
 *
 * ```json translate=no
 * {
 *   "offers": [
 *     {
 *       "offerId": "08e35dc1-89a2-11e3-8055-0015e9b8c48d",
 *       "quantum": {}
 *     }
 *   ]
 * }
 * ```
 *
 * {% endcut %}
 * @deprecated
 */
export interface QuantumDTO {
  /**
   * Минимальное количество единиц товара в заказе. Например, если указать 10, покупатель сможет добавить в корзину не меньше 10 единиц.
   *
   * ⚠️ Если количество товара на складе меньше заданного, ограничение не сработает и покупатель сможет его заказать.
   * @format int32
   * @min 1
   */
  minQuantity?: number;
  /**
   * На сколько единиц покупатель сможет увеличить количество товара в корзине.
   *
   * Например, если задать 5, покупатель сможет добавить к заказу только 5, 10, 15, ... единиц товара.
   *
   * ⚠️ Если количество товара на складе не дотягивает до кванта, ограничение не сработает и покупатель сможет заказать количество, не кратное кванту.
   * @format int32
   * @min 1
   * @max 100
   */
  stepQuantity?: number;
}

/** Информация о новой цене на товар. */
export interface BaseCampaignOfferDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /** Настройка продажи квантами. [Что это значит?](https://yandex.ru/support/marketplace/assortment/fields/quantum.html) */
  quantum?: QuantumDTO;
  /**
   * {% note warning "Вместо него используйте методы скрытия товаров с витрины" %}
   *
   * * [GET campaigns/{campaignId}/hidden-offers](../../reference/assortment/getHiddenOffers.md) — просмотр скрытых товаров;
   * * [POST campaigns/{campaignId}/hidden-offers](../../reference/assortment/addHiddenOffers.md) — скрытие товаров;
   * * [POST campaigns/{campaignId}/hidden-offers/delete](../../reference/assortment/deleteHiddenOffers.md) — возобновление показа.
   *
   * {% endnote %}
   *
   * Есть ли товар в продаже.
   * @deprecated
   */
  available?: boolean;
}

/** Цена с указанием НДС и времени последнего обновления. */
export type GetPriceWithVatDTO = PriceDTO & UpdateTimeDTO;

/** Сообщение об ошибке, связанной с размещением товара. */
export interface OfferErrorDTO {
  /** Тип ошибки. */
  message?: string;
  /** Пояснение. */
  comment?: string;
}

/** Параметры размещения товара в магазине. */
export type GetCampaignOfferDTO = BaseCampaignOfferDTO & {
  /** Цена на товар для всех магазинов. */
  basicPrice?: GetPriceWithDiscountDTO;
  /** Цена, установленная в отдельном магазине. */
  campaignPrice?: GetPriceWithVatDTO;
  /** Статус товара. */
  status?: OfferCampaignStatusType;
  /**
   * Ошибки, препятствующие размещению товара на витрине.
   * @minItems 1
   */
  errors?: OfferErrorDTO[] | null;
  /**
   * Предупреждения, не препятствующие размещению товара на витрине.
   * @minItems 1
   */
  warnings?: OfferErrorDTO[] | null;
};

/** Список товаров в заданном магазине. */
export interface GetCampaignOffersResultDTO {
  /** Информация о страницах результатов. */
  paging?: ScrollingPagerDTO;
  /** Страница списка товаров. */
  offers: GetCampaignOfferDTO[];
}

/** Ответ на запрос списка товаров в магазине. */
export type GetCampaignOffersResponse = ApiResponse & {
  /** Список товаров в заданном магазине. */
  result?: GetCampaignOffersResultDTO;
};

/** Параметры размещения товара в магазине. */
export type UpdateCampaignOfferDTO = BaseCampaignOfferDTO & {
  /**
   * Идентификатор НДС, применяемый для товара:
   *
   * * `2` — НДС 10%. Например, используется при реализации отдельных продовольственных и медицинских товаров.
   * * `5` — НДС 0%. Например, используется при продаже товаров, вывезенных в таможенной процедуре экспорта, или при оказании услуг по международной перевозке товаров.
   * * `6` — НДС не облагается, используется только для отдельных видов услуг.
   * * `7` — НДС 20%. Основной НДС с 2019 года.
   * * `10` — НДС 5%. НДС для упрощенной системы налогообложения (УСН).
   * * `11` — НДС 7%. НДС для упрощенной системы налогообложения (УСН).
   *
   * Если параметр не указан, используется НДС, установленный в кабинете.
   *
   * **Для продавцов :no-translate[Market Yandex Go]** недоступна передача и получение НДС.
   */
  vat?: VatType;
};

/** Запрос на обновление предложений товаров магазина. */
export interface UpdateCampaignOffersRequest {
  /**
   * Параметры размещения товаров в заданном магазине.
   * @maxItems 500
   * @minItems 1
   */
  offers: UpdateCampaignOfferDTO[];
}

/** Фильтрации удаляемых товаров по `offerIds`. */
export interface DeleteCampaignOffersRequest {
  /**
   * Идентификаторы товаров в каталоге.
   * @maxItems 500
   * @minItems 1
   * @uniqueItems true
   */
  offerIds: ShopSku[];
}

/** Список товаров, которые не удалось удалить, потому что они не найдены или хранятся на складе Маркета. */
export interface DeleteCampaignOffersDTO {
  /**
   * Список SKU.
   * @minItems 1
   * @uniqueItems true
   */
  notDeletedOfferIds?: ShopSku[] | null;
}

/** Результат удаления товаров. */
export type DeleteCampaignOffersResponse = ApiResponse & {
  /** Список товаров, которые не удалось удалить, потому что они не найдены или хранятся на складе Маркета. */
  result?: DeleteCampaignOffersDTO;
};

export interface GetOfferRecommendationsRequest {
  /**
   * Идентификаторы товаров, информация о которых нужна. ⚠️ Не используйте это поле одновременно с остальными фильтрами. Если вы хотите воспользоваться фильтрами, оставьте поле пустым.
   * @minItems 1
   * @uniqueItems true
   */
  offerIds?: ShopSku[] | null;
  /** Фильтр, выводящий товары, с привлекательными, умеренными и непривлекательными ценами. */
  competitivenessFilter?: PriceCompetitivenessType;
}

/** Информация о состоянии цены на товар. */
export interface OfferForRecommendationDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId?: ShopSku;
  /** Цена на товар в каталоге. */
  price?: BasePriceDTO;
  /** Привлекательность цены на товар. */
  competitiveness?: PriceCompetitivenessType;
  /**
   * Количество показов карточки товара за последние 7 дней.
   * @format int64
   */
  shows?: number;
}

/** Максимальные значения цены, при которых она является привлекательной или умеренной. */
export interface PriceCompetitivenessThresholdsDTO {
  /** Максимальная привлекательная цена. */
  optimalPrice?: BasePriceDTO;
  /** Максимальная умеренная цена. */
  averagePrice?: BasePriceDTO;
}

/** Рекомендации, касающиеся цены на товар. */
export interface OfferRecommendationInfoDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId?: ShopSku;
  /** Максимальные значения цены, при которых она является привлекательной или умеренной. */
  competitivenessThresholds?: PriceCompetitivenessThresholdsDTO;
}

/** Информация о состоянии цен и рекомендации. */
export interface OfferRecommendationDTO {
  /** Информация о состоянии цен. */
  offer?: OfferForRecommendationDTO;
  /** Рекомендации. */
  recommendation?: OfferRecommendationInfoDTO;
}

/** Список товаров с рекомендациями. */
export interface OfferRecommendationsResultDTO {
  /** Информация о страницах результатов. */
  paging?: ScrollingPagerDTO;
  /** Страница списка товаров. */
  offerRecommendations: OfferRecommendationDTO[];
}

export type GetOfferRecommendationsResponse = ApiResponse & {
  /** Список товаров с рекомендациями. */
  result?: OfferRecommendationsResultDTO;
};

/** Информация о ценах на модель товара. */
export interface ModelPriceDTO {
  /** Средняя цена предложения для модели в регионе. */
  avg?: number;
  /** Максимальная цена предложения для модели в регионе. */
  max?: number;
  /** Минимальная цена предложения для модели в регионе. */
  min?: number;
}

/** Модель товара. */
export interface ModelDTO {
  /**
   * Идентификатор модели товара.
   * @format int64
   */
  id?: number;
  /** Название модели товара. */
  name?: string;
  /** Информация о ценах на модель товара. */
  prices?: ModelPriceDTO;
}

/** Список моделей товаров. */
export interface ModelsDTO {
  /** Список моделей товаров. */
  models: ModelDTO[];
}

/** Региональная информация. */
export interface RegionalModelInfoDTO {
  /**
   * Коды валют:
   *
   * * `RUR` — российский рубль.
   * * `UAH` — украинская гривна.
   * * `BYR` — белорусский рубль.
   * * `KZT` — казахстанский тенге.
   * * `UZS` — узбекский сум.
   */
  currency?: CurrencyType;
  /**
   * Идентификатор региона, для которого выводится информация о предложениях модели (доставляемых в этот регион).
   *
   * Информацию о регионе по идентификатору можно получить с помощью запроса [GET regions/{regionId}](../../reference/regions/searchRegionsById.md).
   * @format int64
   */
  regionId?: number;
}

/** Ответ на запрос информации о моделях. */
export type GetModelsResponse = ModelsDTO & RegionalModelInfoDTO;

export type SearchModelsResponse = GetModelsResponse & {
  /** Модель для пагинации. */
  pager?: FlippingPagerDTO;
};

/** Запрос информации о моделях. */
export interface GetModelsRequest {
  /**
   * Список моделей.
   * @minItems 1
   * @uniqueItems true
   */
  models: number[];
}

/** Информация о предложении. */
export interface ModelOfferDTO {
  /**
   * Скидка на предложение в процентах.
   * @format int32
   */
  discount?: number;
  /** Наименование предложения. */
  name?: string;
  /**
   * Позиция предложения в выдаче Маркета на карточке модели.
   * @format int32
   */
  pos?: number;
  /** Цена предложения без скидки магазина. */
  preDiscountPrice?: number;
  /** Цена предложения без скидки, которую получает покупатель при оплате через :no-translate[Yandex Pay]. */
  price?: number;
  /**
   * Идентификатор региона предложения (регион, откуда доставляется товар).
   *
   * Сначала показываются предложения, доставляемые из региона, указанного в запросе в параметре `regionId`. Предложения, доставляемые из других регионов, показываются после них.
   * @format int64
   */
  regionId?: number;
  /**
   * Стоимость доставки товара в регион:
   *
   * * `0` — платить за доставку не нужно.
   * * `-1` — магазин не осуществляет доставку этого товара (самовывоз).
   *
   * Если стоимость доставки неизвестна, параметр не выводится.
   */
  shippingCost?: number;
  /** Название магазина (в том виде, в котором отображается на Маркете). */
  shopName?: string;
  /**
   * Рейтинг магазина.
   *
   * Возможные значения:
   * * `-1` — у магазинов, недавно появившихся на Маркете, рейтинг появляется не сразу. До момента появления рейтинга для таких магазинов возвращается значение `-1`.
   * * `1`.
   * * `2`.
   * * `3`.
   * * `4`.
   * * `5`.
   * @format int32
   */
  shopRating?: number;
  /**
   * {% note warning "Не используйте этот параметр." %}
   *
   *
   *
   * {% endnote %}
   * @deprecated
   * @format int32
   */
  inStock?: number;
}

/** Модель товара. */
export type EnrichedModelDTO = ModelDTO & {
  /**
   * Список первых десяти предложений, расположенных на карточке модели.
   *
   * В ответе на запрос возвращаются предложения различных магазинов. Если есть несколько предложений от одного магазина, в ответе отображается только одно, наиболее релевантное из них.
   * @minItems 1
   */
  offers?: ModelOfferDTO[] | null;
  /**
   * Суммарное количество предложений в розничных магазинах в регионе. Учитываются все предложения от каждого магазина.
   * @format int32
   */
  offlineOffers?: number;
  /**
   * Суммарное количество предложений в интернет-магазинах в регионе. Учитываются все предложения от каждого магазина.
   * @format int32
   */
  onlineOffers?: number;
};

/** Список моделей товаров. */
export interface EnrichedModelsDTO {
  /** Список моделей товаров. */
  models: EnrichedModelDTO[];
}

/** Ответ на запрос списка предложений для моделей. */
export type GetModelsOffersResponse = EnrichedModelsDTO & RegionalModelInfoDTO;

/**
 * Значение ставки.
 * @format int32
 * @min 0
 * @max 9999
 * @example 570
 */
export type Bid = number;

/** Список товаров и ставок на них. */
export interface SkuBidItemDTO {
  /** :no-translate[SKU] товара, которому соответствует ставка из параметра `bid`. */
  sku: ShopSku;
  /**
   * Значение ставки для товара из параметра `sku`, от 50 до 9999.
   *
   * Указывается в процентах от стоимости товара и умножается на 100. Например, ставка 5% обозначается как 500.
   */
  bid: Bid;
}

/** description. */
export interface PutSkuBidsRequest {
  /**
   * Список товаров и ставки для продвижения, которые на них нужно установить.
   * @maxItems 1500
   * @minItems 1
   */
  bids: SkuBidItemDTO[];
}

/** description. */
export interface GetBidsInfoRequest {
  /**
   * Список товаров, для которых нужно получить значения ставок.
   *
   * Если список не задан, постранично возвращаются все товары со ставками.
   *
   * Если список задан, результаты возвращаются одной страницей, а параметры `page_token` и `limit` игнорируются.
   * @maxItems 1500
   * @minItems 1
   * @uniqueItems true
   */
  skus?: ShopSku[] | null;
}

/** Список товаров с указанными ставками. */
export interface GetBidsInfoResponseDTO {
  /** Страница списка товаров. */
  bids: SkuBidItemDTO[];
  /** Идентификатор следующей страницы. */
  paging?: ForwardScrollingPagerDTO;
}

/** description. */
export type GetBidsInfoResponse = ApiResponse & {
  /** Список товаров с указанными ставками. */
  result?: GetBidsInfoResponseDTO;
};

/** description. */
export interface GetBidsRecommendationsRequest {
  /**
   * Список товаров, для которых нужно получить рекомендации по ставкам.
   * @maxItems 1500
   * @minItems 1
   * @uniqueItems true
   */
  skus: ShopSku[];
}

/** Рекомендованная ставка, возможная доля показов и доступные дополнительные инструменты продвижения. */
export interface BidRecommendationItemDTO {
  /**
   * Значение рекомендованной ставки для товара из параметра `sku`, от 50 до 9999.
   *
   * Указывается в процентах от стоимости товара и умножается на 100. Например, ставка 5% обозначается как 500.
   */
  bid: Bid;
  /**
   * Доля показов.
   * @format int64
   * @min 0
   * @max 100
   */
  showPercent: number;
  /**
   * Список доступных субсидий.
   *
   * Чтобы получить необходимый инструмент продвижения, установите ставку, которая будет рекомендована для этого инструмента или выше.
   * @minItems 1
   * @uniqueItems true
   */
  benefits?: BenefitType[] | null;
}

/** Рекомендованная цена. */
export interface PriceRecommendationItemDTO {
  /**
   * Идентификатор кампании.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   */
  campaignId: number;
  /**
   * Рекомендованная цена на товар. Чтобы продвижение хорошо работало, цена на товар должна быть не выше этого значения. [Подробно о рекомендованных ценах](https://yandex.ru/support/marketplace/marketing/campaigns.html#prices)
   * @format decimal
   * @min 1
   */
  price: number;
}

/** Список товаров с рекомендованными ставками. */
export interface SkuBidRecommendationItemDTO {
  /** SKU товара, которому соответствует ставка из параметра `bid`. */
  sku: ShopSku;
  /**
   * Значение рекомендованной ставки для товара из параметра `sku`, от 50 до 9999.
   *
   * Указывается в процентах от стоимости товара и умножается на 100. Например, ставка 5% обозначается как 500.
   *
   * {% note tip "В ответе присутствует не пустой `bidRecommendations`" %}
   *
   * Не обращайте внимания на это поле.
   *
   * {% endnote %}
   *
   *
   */
  bid: Bid;
  /**
   * Список рекомендованных ставок с соответствующими долями показов и доступными дополнительными инструментами продвижения.
   *
   * Чем больше ставка, тем большую долю показов она помогает получить и тем больше дополнительных инструментов продвижения доступно.
   * @minItems 1
   */
  bidRecommendations?: BidRecommendationItemDTO[] | null;
  /**
   * Рекомендованные цены.
   * @deprecated
   * @minItems 1
   */
  priceRecommendations?: PriceRecommendationItemDTO[] | null;
}

/** Список товаров с рекомендованными ставками. */
export interface GetBidsRecommendationsResponseDTO {
  /** Список товаров с рекомендованными ставками. */
  recommendations: SkuBidRecommendationItemDTO[];
}

/** description. */
export type GetBidsRecommendationsResponse = ApiResponse & {
  /** Список товаров с рекомендованными ставками. */
  result?: GetBidsRecommendationsResponseDTO;
};

/** Адрес склада. */
export interface WarehouseAddressDTO {
  /**
   * Город.
   * @maxLength 200
   */
  city: string;
  /**
   * Улица.
   * @maxLength 512
   */
  street?: string;
  /**
   * Номер дома.
   * @maxLength 256
   */
  number?: string;
  /**
   * Номер строения.
   * @maxLength 16
   */
  building?: string;
  /**
   * Номер корпуса.
   * @maxLength 16
   */
  block?: string;
  /** GPS-координаты широты и долготы. */
  gps: GpsDTO;
}

/** Информация о складе. */
export interface WarehouseDTO {
  /**
   * Идентификатор склада.
   * @format int64
   */
  id: number;
  /** Название склада. */
  name: string;
  /**
   * Идентификатор кампании.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   */
  campaignId: number;
  /** Возможна ли доставка по модели Экспресс. */
  express: boolean;
  /** Адрес склада. */
  address?: WarehouseAddressDTO;
}

/** Информация о группе складов. */
export interface WarehouseGroupDTO {
  /** Название группы складов. */
  name: string;
  /** Склад, идентификатор которого нужно использовать для передачи остатков по всей группе. */
  mainWarehouse: WarehouseDTO;
  /** Список складов, входящих в группу. */
  warehouses: WarehouseDTO[];
}

/** Информация о складах и группах складов. */
export interface WarehousesDTO {
  /** Список складов, не входящих в группы. */
  warehouses: WarehouseDTO[];
  /** Список групп складов. */
  warehouseGroups: WarehouseGroupDTO[];
}

export type GetWarehousesResponse = ApiResponse & {
  /** Информация о складах и группах складов. */
  result?: WarehousesDTO;
};

/** Запрос на получение складов кабинета. */
export interface GetPagedWarehousesRequest {
  /**
   * Свойства складов, которые необходимо вернуть. Если какое-то значение параметра не задано, этой информации в ответе не будет.
   *
   * Передавайте параметр, только если нужна информация, которую он возвращает.
   *
   * Можно передать сразу несколько значений.
   * @minItems 1
   * @uniqueItems true
   */
  components?: WarehouseComponentType[] | null;
  /**
   * Список идентификаторов кампании тех магазинов, склады которых необходимо вернуть.
   *
   * Их можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не используйте вместо них идентификаторы магазинов, которые указаны в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @maxItems 25
   * @minItems 1
   * @uniqueItems true
   */
  campaignIds?: number[] | null;
}

/**
 * Информация о группе, к которой принадлежит склад.
 *
 * Возвращается только для складов в группах.
 *
 * [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks)
 */
export interface WarehouseGroupInfoDTO {
  /** Название группы, к которой принадлежит склад. */
  name: string;
  /**
   * Идентификатор группы складов.
   * @format int64
   */
  id: number;
}

/** Информация о статусе склада. */
export interface WarehouseStatusDTO {
  /**
   * Статус склада:
   *
   * * `DISABLED_MANUALLY` – отключен вами.
   * * `OTHER` – другой статус. Например, склад включен или отключен Маркетом.
   */
  status: WarehouseStatusType;
}

/** Информация о складе. */
export interface WarehouseDetailsDTO {
  /**
   * Идентификатор склада.
   * @format int64
   */
  id: number;
  /** Название склада. */
  name: string;
  /**
   * Идентификатор кампании того магазина, который связан со складом.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   */
  campaignId: number;
  /** Возможна ли доставка для модели Экспресс. */
  express: boolean;
  /**
   * Информация о группе, к которой принадлежит склад.
   *
   * Возвращается только для складов в группах.
   *
   * [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks)
   */
  groupInfo?: WarehouseGroupInfoDTO;
  /**
   * Адрес склада.
   *
   * Возвращается, только если в запросе параметр `components` принимает значение `ADDRESS`.
   */
  address?: WarehouseAddressDTO;
  /**
   * Статус склада.
   *
   * Возвращается, только если в запросе параметр `components` принимает значение `STATUS`.
   *
   * {% note info "Статус склада, полученный через :no-translate[API], может не совпадать со статусом в кабинете" %}
   *
   * Например, сначала Маркет отключил склад, а затем вы с помощью метода [POST campaigns/{campaignId}/warehouse/status](../../reference/warehouses/updateWarehouseStatus.md).
   *
   * Статус в кабинете — **Отключен Маркетом**, а через API вернется **DISABLED_MANUALLY** (отключен вами).
   *
   * {% endnote %}
   */
  status?: WarehouseStatusDTO;
}

/** Информация о складах в кабинете. */
export interface PagedWarehousesDTO {
  /** Список складов. */
  warehouses: WarehouseDetailsDTO[];
  /** Идентификатор следующей страницы. */
  paging?: ForwardScrollingPagerDTO;
}

export type GetPagedWarehousesResponse = ApiResponse & {
  /** Информация о складах в кабинете. */
  result?: PagedWarehousesDTO;
};

/** Склад Маркета (:no-translate[FBY]). */
export interface FulfillmentWarehouseDTO {
  /**
   * Идентификатор склада.
   * @format int64
   */
  id: number;
  /** Название склада. */
  name: string;
  /** Адрес склада. */
  address?: WarehouseAddressDTO;
}

/** Список складов Маркета (:no-translate[FBY]). */
export interface FulfillmentWarehousesDTO {
  /** Список складов Маркета (:no-translate[FBY]). */
  warehouses: FulfillmentWarehouseDTO[];
}

export type GetFulfillmentWarehousesResponse = ApiResponse & {
  /** Список складов Маркета (:no-translate[FBY]). */
  result?: FulfillmentWarehousesDTO;
};

/**
 * Запрос на изменение статуса склада.
 *
 * Позволяет выключить склад или включить ранее отключенный вами склад.
 *
 * Если склад был отключен Маркетом, то включить его вручную с помощью этого метода не получится.
 */
export interface UpdateWarehouseStatusRequest {
  /**
   * Статус склада:
   *
   * * `true` — включен.
   * * `false` — отключен.
   */
  enabled: boolean;
}

export type UpdateWarehouseStatusResponse = ApiResponse & {
  /** Информация о статусе склада. */
  result?: WarehouseStatusDTO;
};

/**
 * Идентификатор категории на Маркете.
 *
 * При изменении категории убедитесь, что характеристики товара и их значения в параметре `parameterValues` вы передаете для новой категории.
 *
 * Список категорий Маркета можно получить с помощью запроса  [POST categories/tree](../../reference/categories/getCategoriesTree.md).
 * @format int32
 * @min 1
 */
export type CategoryId = number;

/** Единица измерения. */
export interface UnitDTO {
  /**
   * Идентификатор единицы измерения.
   * @format int64
   */
  id: number;
  /**
   * Сокращенное название единицы измерения.
   * @example "кг"
   */
  name: string;
  /**
   * Полное название единицы измерения.
   * @example "килограмм"
   */
  fullName: string;
}

/** Единицы измерения характеристики товара. */
export interface CategoryParameterUnitDTO {
  /**
   * Единица измерения по умолчанию.
   * @format int64
   */
  defaultUnitId: number;
  /** Допустимые единицы измерения. */
  units: UnitDTO[];
}

/** Значение характеристики. */
export interface ParameterValueOptionDTO {
  /**
   * Идентификатор значения.
   * @format int64
   */
  id: number;
  /** Значение. */
  value: string;
  /** Описание значения. */
  description?: string;
}

/** Ограничения на значения характеристик. */
export interface ParameterValueConstraintsDTO {
  /**
   * Минимальное число.
   * @format double
   */
  minValue?: number;
  /**
   * Максимальное число.
   * @format double
   */
  maxValue?: number;
  /**
   * Максимальная длина текста.
   * @format int32
   */
  maxLength?: number;
}

/** Значение ограничивающей характеристики и список допустимых значений ограничиваемой характеристики. */
export interface OptionValuesLimitedDTO {
  /**
   * Идентификатор значения ограничивающей характеристики.
   * @format int64
   */
  limitingOptionValueId: number;
  /**
   * Идентификаторы допустимых значений ограничиваемой характеристики.
   * @uniqueItems true
   */
  optionValueIds: number[];
}

/**
 * Ограничение на возможные значения, накладываемое другой характеристикой.
 *
 * Если ограничивающая характеристика принимает определенное значение, список возможных значений ограничиваемой характеристики сокращается.
 *
 * **Пример**
 *
 * Характеристика **размер** сама по себе может принимать девять разных значений: `S`, `M`, `L`, `44`, `46`, `48`, `42/164`, `46/176`, `44S`.
 *
 * Если ограничивающая характеристика **размерная сетка** принимает значение `RU`, список возможных значений размера сокращается до `44`, `46`, `48`.
 */
export interface ValueRestrictionDTO {
  /**
   * Идентификатор ограничивающей характеристики.
   * @format int64
   * @min 1
   */
  limitingParameterId: number;
  /** Значения ограничивающей характеристики и соответствующие допустимые значения текущей характеристики. */
  limitedValues: OptionValuesLimitedDTO[];
}

/** Характеристика товара. */
export interface CategoryParameterDTO {
  /**
   * Идентификатор характеристики.
   * @format int64
   * @min 1
   */
  id: number;
  /** Название характеристики. */
  name?: string;
  /** Тип данных. */
  type: ParameterType;
  /** Единицы измерения характеристики товара. */
  unit?: CategoryParameterUnitDTO;
  /** Описание характеристики. */
  description?: string;
  /**
   * Перечень возможных рекомендаций по заполнению карточки, к которым относится данная характеристика.
   * @minItems 1
   * @uniqueItems true
   */
  recommendationTypes?: OfferCardRecommendationType[] | null;
  /** Обязательность характеристики. */
  required: boolean;
  /** Используется ли характеристика в фильтре. */
  filtering: boolean;
  /** Является ли характеристика особенностью варианта. */
  distinctive: boolean;
  /** Можно ли передать сразу несколько значений. */
  multivalue: boolean;
  /** Можно ли передавать собственное значение, которого нет в списке вариантов Маркета. Только для характеристик типа `ENUM`. */
  allowCustomValues: boolean;
  /**
   * Список допустимых значений параметра. Только для характеристик типа `ENUM`.
   * @minItems 1
   */
  values?: ParameterValueOptionDTO[] | null;
  /** Ограничения на значения. Только для характеристик типа `TEXT` и `NUMERIC`. */
  constraints?: ParameterValueConstraintsDTO;
  /**
   * Ограничения на значения, накладываемые другими характеристиками. Только для характеристик типа `ENUM`.
   * @minItems 1
   */
  valueRestrictions?: ValueRestrictionDTO[] | null;
}

/** Информация о параметрах категории. */
export interface CategoryContentParametersDTO {
  /**
   * Идентификатор категории на Маркете.
   *
   * При изменении категории убедитесь, что характеристики товара и их значения в параметре `parameterValues` вы передаете для новой категории.
   *
   * Список категорий Маркета можно получить с помощью запроса  [POST categories/tree](../../reference/categories/getCategoriesTree.md).
   */
  categoryId: CategoryId;
  /**
   * Список характеристик.
   * @minItems 1
   */
  parameters?: CategoryParameterDTO[] | null;
}

/** Ответ со списком характеристик для категории и их допустимыми значениями. */
export type GetCategoryContentParametersResponse = ApiResponse & {
  /** Информация о параметрах категории. */
  result?: CategoryContentParametersDTO;
};

export interface GetOfferCardsContentStatusRequest {
  /**
   * Идентификаторы товаров, информация о которых нужна.
   * <br><br>
   * ⚠️ Не используйте это поле одновременно с фильтрами по статусам карточек, категориям, брендам или тегам. Если вы хотите воспользоваться фильтрами, оставьте поле пустым.
   * @maxItems 200
   * @minItems 1
   * @uniqueItems true
   */
  offerIds?: ShopSku[] | null;
  /**
   * Фильтр по статусам карточек.
   *
   * [Что такое карточка товара](https://yandex.ru/support/marketplace/assortment/content/index.html)
   * @minItems 1
   * @uniqueItems true
   */
  cardStatuses?: OfferCardStatusType[] | null;
  /**
   * Фильтр по категориям на Маркете.
   * @maxItems 200
   * @minItems 1
   * @uniqueItems true
   */
  categoryIds?: CategoryId[] | null;
}

/** Рекомендация по заполнению карточки товара. */
export interface OfferCardRecommendationDTO {
  /** Рекомендация. */
  type: OfferCardRecommendationType;
  /**
   * Процент выполнения рекомендации.
   *
   * Указывается для рекомендаций некоторых типов:
   *
   * * `PICTURE_COUNT`.
   * * `VIDEO_COUNT`.
   * * `MAIN`.
   * * `ADDITIONAL`.
   * * `DISTINCTIVE`.
   * @format int32
   * @min 0
   * @max 100
   * @exclusiveMax true
   */
  percent?: number;
  /**
   * Максимальное количество баллов рейтинга карточки, которые можно получить за выполнение рекомендаций.
   * @format int32
   * @min 1
   * @max 100
   */
  remainingRatingPoints?: number;
}

/**
 * Информация о состоянии карточки товара.
 *
 * Если поле `mapping` отсутствует в ответе, Маркет еще не успел обработать информацию о товаре. Чтобы определить категорию такого товара, повторите запрос через несколько минут.
 */
export interface OfferCardDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /** Основная информация о карточке товара. */
  mapping?: GetMappingDTO;
  /**
   * Список характеристик с их значениями.
   * @minItems 1
   */
  parameterValues?: ParameterValueDTO[] | null;
  /** Статус карточки. */
  cardStatus?: OfferCardStatusType;
  /**
   * Рейтинг карточки.
   * @format int32
   */
  contentRating?: number;
  /**
   * Средний рейтинг карточки у товаров той категории, которая указана в `marketCategoryId`.
   * @format int32
   */
  averageContentRating?: number;
  /** Статус вычисления рейтинга карточки и рекомендаций. */
  contentRatingStatus?: OfferCardContentStatusType;
  /**
   * Список рекомендаций к заполнению карточки.
   *
   * Рекомендации Маркета помогают заполнять карточку так, чтобы покупателям было проще найти ваш товар и решиться на покупку.
   * @minItems 1
   */
  recommendations?: OfferCardRecommendationDTO[] | null;
  /**
   * Ошибки в контенте, препятствующие размещению товара на витрине.
   * @minItems 1
   */
  errors?: OfferErrorDTO[] | null;
  /**
   * Связанные с контентом предупреждения, не препятствующие размещению товара на витрине.
   * @minItems 1
   */
  warnings?: OfferErrorDTO[] | null;
}

/** Список товаров с информацией о состоянии карточек. */
export interface OfferCardsContentStatusDTO {
  /** Страница списка товаров с информацией о состоянии карточек. */
  offerCards: OfferCardDTO[];
  /** Идентификатор следующей страницы. */
  paging?: ForwardScrollingPagerDTO;
}

/** Ответ со списком состояний товаров и пагинацией. */
export type GetOfferCardsContentStatusResponse = ApiResponse & {
  /** Список товаров с информацией о состоянии карточек. */
  result?: OfferCardsContentStatusDTO;
};

/** Товар с указанными характеристиками. */
export interface OfferContentDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /**
   * Идентификатор категории на Маркете.
   *
   * При изменении категории убедитесь, что характеристики товара и их значения в параметре `parameterValues` вы передаете для новой категории.
   *
   * Список категорий Маркета можно получить с помощью запроса  [POST categories/tree](../../reference/categories/getCategoriesTree.md).
   */
  categoryId: CategoryId;
  /**
   * Список характеристик с их значениями.
   *
   * При **изменении** характеристик передавайте только те, значение которых нужно обновить. Если в `categoryId` вы меняете категорию, значения общих характеристик для старой и новой категории сохранятся, передавать их не нужно.
   *
   * Чтобы **удалить** значение заданной характеристики, передайте ее `parameterId` с пустым `value`.
   * @maxItems 300
   * @minItems 1
   */
  parameterValues: ParameterValueDTO[];
}

/** Запрос на установку новых значений для параметров. */
export interface UpdateOfferContentRequest {
  /**
   * Список товаров с указанными характеристиками.
   * @maxItems 100
   * @minItems 1
   */
  offersContent: OfferContentDTO[];
}

/** Текст ошибки или предупреждения. */
export interface OfferContentErrorDTO {
  /**
   * Типы ошибок и предупреждений:
   *
   * * `OFFER_NOT_FOUND` — такого товара нет в каталоге.
   * * `UNKNOWN_CATEGORY` — указана неизвестная категория.
   * * `INVALID_CATEGORY` — указана нелистовая категория. Укажите ту, которая не имеет дочерних категорий.
   * * `UNKNOWN_PARAMETER` — передана характеристика, которой нет среди характеристик категории.
   * * `UNEXPECTED_BOOLEAN_VALUE` — вместо boolean-значения передано что-то другое.
   * * `NUMBER_FORMAT` — передана строка, не обозначающая число, вместо числа.
   * * `INVALID_UNIT_ID` — передана единица измерения, недопустимая для характеристики.
   * * `INVALID_GROUP_ID_LENGTH` — в названии превышено допустимое значение символов — 255.
   * * `INVALID_GROUP_ID_CHARACTERS` — переданы [недопустимые символы](:no-translate[*ascii-code]).
   *
   * Проверить, какие категорийные характеристики доступны для заданной категории, и получить их настройки можно с помощью запроса [POST category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters).
   */
  type: OfferContentErrorType;
  /**
   * Идентификатор характеристики, с которой связана ошибка или предупреждение.
   * @format int64
   */
  parameterId?: number;
  /** Текст ошибки или предупреждения. */
  message: string;
}

/** Ошибки и предупреждения, которые появились из-за переданных характеристик. */
export interface UpdateOfferContentResultDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /**
   * Ошибки.
   *
   * Если хотя бы по одному товару есть ошибка, информация в каталоге не обновится по всем переданным товарам.
   * @minItems 1
   */
  errors?: OfferContentErrorDTO[] | null;
  /**
   * Предупреждения.
   *
   * Информация в каталоге обновится.
   * @minItems 1
   */
  warnings?: OfferContentErrorDTO[] | null;
}

/** Описывает проблемы, которые появились при сохранении товара. */
export type UpdateOfferContentResponse = ApiResponse & {
  /**
   * Ошибки и предупреждения, которые появились при обработке переданных значений. Каждый элемент списка соответствует одному товару.
   *
   * Если ошибок и предупреждений нет, поле не передается.
   * @minItems 1
   */
  results?: UpdateOfferContentResultDTO[] | null;
};

/** Информация о заказе или возврате, по которому начат чат. */
export interface ChatContextDTO {
  /**
   * Тип чата:
   *
   * * `ORDER` — по заказам. Подробнее о чатах по заказам читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/communication/about-orders).
   * * `RETURN` — по возвратам (:no-translate[FBS] и Экспресс). Подробнее о чатах по возвратам читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/communication/about-orders).
   * * `DIRECT` — чат, который начал покупатель. Подробнее о таком типе читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/communication/with-users).
   */
  type: ChatContextType;
  /**
   * Идентификатор заказа или возврата.
   * @format int64
   * @min 1
   */
  id: number;
}

/** Заказ, для которого нужно создать чат. */
export interface CreateChatRequest {
  /**
   * Идентификатор заказа на Маркете.
   * @deprecated
   * @format int64
   */
  orderId?: number;
  /** Информация о заказе или возврате, по которому начат чат. */
  context?: ChatContextDTO;
}

/** Информация о созданном чате. */
export interface CreateChatResultDTO {
  /**
   * Идентификатор чата.
   * @format int64
   * @min 1
   */
  chatId: number;
}

/** Результат создания чата. */
export type CreateChatResponse = ApiResponse & {
  /** Информация о созданном чате. */
  result?: CreateChatResultDTO;
};

/** Фильтры по чатам, которые нужно вернуть. */
export interface GetChatsRequest {
  /**
   * Фильтр по идентификаторам заказов на Маркете.
   * @deprecated
   * @minItems 1
   * @uniqueItems true
   */
  orderIds?: number[] | null;
  /**
   * Фильтр по заказам или возвратам, по которым начаты чаты.
   * @minItems 1
   * @uniqueItems true
   */
  contexts?: ChatContextDTO[] | null;
  /**
   * Фильтр по типам чатов.
   * @minItems 1
   * @uniqueItems true
   */
  types?: ChatType[] | null;
  /**
   * Фильтр по статусам чатов.
   * @minItems 1
   * @uniqueItems true
   */
  statuses?: ChatStatusType[] | null;
}

/** Информация о заказе или возврате, по которому начат чат. */
export interface ChatFullContextDTO {
  /**
   * Тип чата:
   *
   * * `ORDER` — по заказам. Подробнее о чатах по заказам читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/communication/about-orders).
   * * `RETURN` — по возвратам (:no-translate[FBS] и Экспресс). Подробнее о чатах по возвратам читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/communication/about-orders).
   * * `DIRECT` — чат, который начал покупатель. Подробнее о таком типе читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/communication/with-users).
   */
  type: ChatContextType;
  /**
   * Идентификатор заказа.
   *
   * Возвращается для заказов и возвратов.
   * @format int64
   * @min 1
   */
  orderId?: number;
  /**
   * Идентификатор возврата.
   *
   * Возвращается только для возвратов.
   * @format int64
   * @min 1
   */
  returnId?: number;
}

/** Информация о чате. */
export interface GetChatInfoDTO {
  /**
   * Идентификатор чата.
   * @format int64
   * @min 1
   */
  chatId: number;
  /**
   * Идентификатор заказа.
   * @deprecated
   * @format int64
   * @min 1
   */
  orderId?: number;
  /** Информация о заказе или возврате, по которому начат чат. */
  context: ChatFullContextDTO;
  /**
   * Тип чата:
   *
   * * `CHAT` — чат с покупателем.
   * * `ARBITRAGE` — спор.
   */
  type: ChatType;
  /**
   * Статус чата:
   *
   * * `NEW` — новый чат.
   * * `WAITING_FOR_CUSTOMER` — нужен ответ покупателя.
   * * `WAITING_FOR_PARTNER` — нужен ответ магазина.
   * * `WAITING_FOR_ARBITER` — нужен ответ арбитра.
   * * `WAITING_FOR_MARKET` — нужен ответ Маркета.
   * * `FINISHED` — чат завершен.
   */
  status: ChatStatusType;
  /**
   * Дата и время создания чата.
   *
   * Формат даты: :no-translate[ISO 8601] со смещением относительно :no-translate[UTC].
   * @format date-time
   * @example "2017-11-21T00:00:00+03:00"
   */
  createdAt: string;
  /**
   * Дата и время последнего сообщения в чате.
   *
   * Формат даты: :no-translate[ISO 8601] со смещением относительно :no-translate[UTC].
   * @format date-time
   * @example "2017-11-21T00:00:00+03:00"
   */
  updatedAt: string;
}

/** Список чатов. */
export interface GetChatsInfoDTO {
  /** Информация о чатах. */
  chats: GetChatInfoDTO[];
  /** Информация о страницах с результатами. */
  paging?: ForwardScrollingPagerDTO;
}

export type GetChatsResponse = ApiResponse & {
  /** Список чатов. */
  result?: GetChatsInfoDTO;
};

export type GetChatResponse = ApiResponse & {
  /** Информация о чате. */
  result?: GetChatInfoDTO;
};

/** Информация о чате и отправляемом файле. */
export interface SendFileToChatRequest {
  /**
   * Содержимое файла. Максимальный размер файла — 5 Мбайт.
   * @format binary
   */
  file: File;
}

/** Информация о приложенных к сообщению файлах. */
export interface ChatMessagePayloadDTO {
  /** Название файла. */
  name: string;
  /** Ссылка для скачивания файла. */
  url: string;
  /**
   * Размер файла в байтах.
   * @format int32
   */
  size: number;
}

/** Информация о сообщении. */
export interface ChatMessageDTO {
  /**
   * Идентификатор сообщения.
   * @format int64
   * @min 1
   */
  messageId: number;
  /**
   * Дата и время создания сообщения.
   *
   * Формат даты: :no-translate[ISO 8601] со смещением относительно :no-translate[UTC].
   * @format date-time
   * @example "2017-11-21T00:00:00+03:00"
   */
  createdAt: string;
  /** Отправитель. */
  sender: ChatMessageSenderType;
  /**
   * Текст сообщения.
   *
   * Необязательный параметр, если возвращается параметр `payload`.
   */
  message?: string;
  /**
   * Информация о приложенных к сообщению файлах.
   *
   * Необязательный параметр, если возвращается параметр `message`.
   * @minItems 1
   */
  payload?: ChatMessagePayloadDTO[] | null;
}

export type GetChatMessageResponse = ApiResponse & {
  /** Информация о сообщении. */
  result?: ChatMessageDTO;
};

/** В какой чат нужно отправить сообщение и текст сообщения. */
export interface SendMessageToChatRequest {
  /**
   * Текст сообщения.
   * @minLength 1
   * @maxLength 4096
   */
  message: string;
}

/** Историю какого чата нужно получить — и начиная с какого сообщения. */
export interface GetChatHistoryRequest {
  /**
   * Идентификатор сообщения, начиная с которого нужно получить все последующие сообщения.
   * @format int64
   * @min 1
   */
  messageIdFrom?: number;
}

/** Информация о сообщениях. */
export interface ChatMessagesResultDTO {
  /**
   * Идентификатор заказа.
   * @deprecated
   * @format int64
   */
  orderId?: number;
  /** Информация о заказе или возврате, по которому начат чат. */
  context: ChatFullContextDTO;
  /** Информация о сообщениях. */
  messages: ChatMessageDTO[];
  /** Информация о страницах с результатами. */
  paging?: ForwardScrollingPagerDTO;
}

export type GetChatHistoryResponse = ApiResponse & {
  /** Информация о сообщениях. */
  result?: ChatMessagesResultDTO;
};

/** Параметры для расчета стоимости услуг. */
export interface CalculateTariffsParametersDTO {
  /**
   * Идентификатор кампании.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   *
   * У пользователя, который выполняет запрос, должен быть доступ к этой кампании.
   *
   * Используйте параметр `campaignId`, если уже завершили подключение магазина на Маркете. Иначе вернется пустой список.
   *
   * Обязательный параметр, если не указан параметр `sellingProgram`. Совместное использование параметров приведет к ошибке.
   * @format int64
   * @min 1
   */
  campaignId?: number;
  /**
   * Модель размещения.
   *
   * **Для продавцов Market Yandex Go** недоступны модели DBS и Экспресс.
   *
   * Обязательный параметр, если не указан параметр `campaignId`. Совместное использование параметров приведет к ошибке.
   */
  sellingProgram?: SellingProgramType;
  /** Частота выплат. */
  frequency?: PaymentFrequencyType;
  /**
   * Валюта, в которой рассчитывается услуга.
   *
   * Значение по умолчанию: `RUR`.
   */
  currency?: CurrencyType;
}

/** Параметры товара, для которого нужно рассчитать стоимость услуг. */
export interface CalculateTariffsOfferDTO {
  /**
   * Идентификатор категории товара на Маркете.
   *
   * Для расчета стоимости услуг необходимо указать идентификатор листовой категории товара — той, которая не имеет дочерних категорий.
   *
   * Чтобы узнать идентификатор категории, к которой относится товар, воспользуйтесь запросом [POST categories/tree](../../reference/categories/getCategoriesTree.md).
   * @format int64
   * @min 0
   * @exclusiveMin true
   */
  categoryId: number;
  /**
   * Цена на товар в рублях.
   * @min 0
   * @exclusiveMin true
   */
  price: number;
  /**
   * Длина товара в сантиметрах.
   * @min 0
   * @exclusiveMin true
   */
  length: number;
  /**
   * Ширина товара в сантиметрах.
   * @min 0
   * @exclusiveMin true
   */
  width: number;
  /**
   * Высота товара в сантиметрах.
   * @min 0
   * @exclusiveMin true
   */
  height: number;
  /**
   * Вес товара в килограммах.
   * @min 0
   * @exclusiveMin true
   */
  weight: number;
  /**
   * Квант продажи — количество единиц товара в одном товарном предложении.
   * @format int32
   * @min 1
   * @default 1
   */
  quantity?: number;
}

export interface CalculateTariffsRequest {
  /** Параметры для расчета стоимости услуг. */
  parameters: CalculateTariffsParametersDTO;
  /**
   * Товары, для которых нужно рассчитать стоимость услуг.
   * @maxItems 200
   * @minItems 1
   */
  offers: CalculateTariffsOfferDTO[];
}

/** Информация об услугах Маркета. */
export interface CalculatedTariffDTO {
  /** Услуга Маркета. */
  type: CalculatedTariffType;
  /** Стоимость услуги в рублях. */
  amount?: number;
  /** Валюта, в которой рассчитывается услуга. */
  currency?: CurrencyType;
  /** Параметры расчета тарифа. */
  parameters: TariffParameterDTO[];
}

/** Стоимость услуг. */
export interface CalculateTariffsOfferInfoDTO {
  /** Информация о товаре, которую вы передали в запросе для расчета стоимости услуг. */
  offer: CalculateTariffsOfferDTO;
  /**
   * Список услуг и их стоимость.
   *
   * По некоторым услугам могут возвращаться несколько разных стоимостей. Например, в модели :no-translate[FBS] стоимость услуги `SORTING` (обработка заказа) зависит от способа отгрузки и количества заказов в отгрузке. Подробнее о тарифах на услуги читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/introduction/rates/models/).
   */
  tariffs: CalculatedTariffDTO[];
}

/** Расчет стоимости услуг. */
export interface CalculateTariffsResponseDTO {
  /** Стоимость услуг. */
  offers: CalculateTariffsOfferInfoDTO[];
}

export type CalculateTariffsResponse = ApiResponse & {
  /** Стоимость услуг. */
  result?: CalculateTariffsResponseDTO;
};

/** Параметры запроса категорий. */
export interface GetCategoriesRequest {
  /** Язык категорий. */
  language?: LanguageType;
}

/**
 * Информация о категории.
 *
 * Категория считается листовой, если у нее нет дочерних категорий.
 */
export interface CategoryDTO {
  /**
   * Идентификатор категории.
   * @format int64
   */
  id: number;
  /** Название категории. */
  name: string;
  /**
   * Дочерние категории.
   * @minItems 1
   */
  children?: CategoryDTO[] | null;
}

export type GetCategoriesResponse = ApiResponse & {
  /**
   * Информация о категории.
   *
   * Категория считается листовой, если у нее нет дочерних категорий.
   */
  result?: CategoryDTO;
};

/** Список категорий, для которых нужно вернуть лимит на установку кванта и минимального количества товаров. */
export interface GetCategoriesMaxSaleQuantumRequest {
  /**
   * Идентификаторы листовых категории на Маркете — тех, у которых нет дочерних категорий.
   * @maxItems 1500
   * @minItems 1
   * @uniqueItems true
   */
  marketCategoryIds: number[];
}

/** Лимит на установку кванта и минимального количества товаров по категориям. */
export interface MaxSaleQuantumDTO {
  /**
   * Идентификатор категории.
   * @format int64
   */
  id: number;
  /** Название категории. */
  name?: string;
  /** Лимит на установку кванта и минимального количества товаров. */
  maxSaleQuantum?: number;
}

/** Текст ошибки. */
export interface CategoryErrorDTO {
  /**
   * Идентификатор категории.
   * @format int64
   */
  categoryId?: number;
  /**
   * Типы ошибок:
   *
   * * `UNKNOWN_CATEGORY` — указана неизвестная категория.
   * * `CATEGORY_IS_NOT_LEAF` — указана нелистовая категория. Укажите ту, которая не имеет дочерних категорий.
   */
  type?: CategoryErrorType;
}

/** Категории и лимит на установку кванта и минимального количества товаров. */
export interface GetCategoriesMaxSaleQuantumDTO {
  /** Категории и лимит на установку кванта и минимального количества товаров. */
  results: MaxSaleQuantumDTO[];
  /**
   * Ошибки, которые появились из-за переданных категорий.
   * @minItems 1
   */
  errors?: CategoryErrorDTO[] | null;
}

export type GetCategoriesMaxSaleQuantumResponse = ApiResponse &
  GetCategoriesMaxSaleQuantumDTO;

/** Запрос информации по индексу качества. */
export interface GetQualityRatingRequest {
  /**
   * Начало периода.
   *
   * Формат даты: `ГГГГ‑ММ‑ДД`.
   *
   * Не может быть раньше 30 дней от текущей даты.
   * @format date
   */
  dateFrom?: string;
  /**
   * Конец периода.
   *
   * Формат даты: `ГГГГ‑ММ‑ДД`.
   *
   * Не может быть позже текущей даты.
   * @format date
   */
  dateTo?: string;
  /**
   * Список идентификаторов кампании.
   *
   * Их можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не используйте вместо них идентификаторы магазинов, которые указаны в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @maxItems 50
   * @minItems 1
   * @uniqueItems true
   */
  campaignIds: number[];
}

/** Составляющая индекса качества. */
export interface QualityRatingComponentDTO {
  /**
   * Значение составляющей в процентах.
   * @format double
   * @min 0
   * @max 100
   */
  value: number;
  /** Тип составляющей. */
  componentType: QualityRatingComponentType;
}

/** Информация об индексе качества. */
export interface QualityRatingDTO {
  /**
   * Значение индекса качества.
   * @format int64
   * @min 0
   * @max 100
   */
  rating: number;
  /**
   * Дата вычисления.
   *
   * Формат даты: `ГГГГ‑ММ‑ДД`.
   * @format date
   */
  calculationDate: string;
  /** Составляющие индекса качества. */
  components: QualityRatingComponentDTO[];
}

/** Информация об индексе качества магазина. */
export interface CampaignQualityRatingDTO {
  /**
   * Идентификатор кампании.
   *
   * Его можно узнать с помощью запроса [GET campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на название своего бизнеса и перейдите на страницу:
   *
   *   * **Модули и :no-translate[API]** → блок **Передача данных Маркету**.
   *   * **Лог запросов** → выпадающий список в блоке **Показывать логи**.
   *
   * ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.
   * @format int64
   */
  campaignId: number;
  /** Список значений индекса качества. */
  ratings: QualityRatingDTO[];
}

/** Информация об индексе качества магазинов. */
export interface CampaignsQualityRatingDTO {
  /** Список магазинов c информацией об их индексе качества. */
  campaignRatings: CampaignQualityRatingDTO[];
}

/** Информация об индексе качества магазинов. */
export type GetQualityRatingResponse = ApiResponse & {
  /** Информация об индексе качества магазинов. */
  result?: CampaignsQualityRatingDTO;
};

/** Информация о заказе, который повлиял на индекс качества. */
export interface QualityRatingAffectedOrderDTO {
  /**
   * Идентификатор заказа.
   * @format int64
   * @min 0
   */
  orderId: number;
  /** Описание проблемы. */
  description: string;
  /** Тип составляющей индекса качества. */
  componentType: AffectedOrderQualityRatingComponentType;
}

/** Информация о заказах, которые повлияли на индекс качества. */
export interface QualityRatingDetailsDTO {
  /** Список заказов, которые повлияли на индекс качества. */
  affectedOrders: QualityRatingAffectedOrderDTO[];
}

export type GetQualityRatingDetailsResponse = ApiResponse & {
  /** Информация о заказах, которые повлияли на индекс качества. */
  result?: QualityRatingDetailsDTO;
};

/** Фильтры для получения списка акций. */
export interface GetPromosRequest {
  /**
   * Какие акции вернутся:
   *
   * * `PARTICIPATING_NOW` — текущие и будущие акции, в которых продавец участвует или может принять участие.
   *
   * * `PARTICIPATED` — завершенные акции, в которых продавец участвовал за последний год. Если за год их было меньше 15, в ответе придут 15 последних акций за все время.
   */
  participation?: PromoParticipationType;
  /**
   * Фильтр по типу акции.
   *
   * По умолчанию возвращаются все типы акций.
   */
  mechanics?: MechanicsType;
}

/** Время проведения акции. */
export interface PromoPeriodDTO {
  /**
   * Дата и время начала акции.
   * @format date-time
   */
  dateTimeFrom: string;
  /**
   * Дата и время окончания акции.
   * @format date-time
   */
  dateTimeTo: string;
}

/** Информация о товарах в акции. */
export interface GetPromoAssortmentInfoDTO {
  /**
   * Количество товаров, которые участвуют или участвовали в акции.
   *
   * Учитываются только товары, которые были добавлены вручную.
   *
   * Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index).
   * @format int32
   */
  activeOffers: number;
  /**
   * Количество доступных товаров в акции.
   *
   * Параметр возвращается только для текущих и будущих акций.
   * @format int32
   */
  potentialOffers?: number;
  /**
   * Есть ли изменения в ассортименте, которые еще не применились. Сохранение изменений занимает некоторое время.
   *
   * Параметр возвращается только для текущих и будущих акций.
   */
  processing?: boolean;
}

/**
 * Информация для типа `MARKET_PROMOCODE`.
 *
 * Параметр заполняется только для этого типа акции.
 */
export interface GetPromoPromocodeInfoDTO {
  /** Промокод. */
  promocode: string;
  /**
   * Процент скидки по промокоду.
   * @format int32
   */
  discount: number;
}

/** Информация о типе акции. */
export interface GetPromoMechanicsInfoDTO {
  /**
   * Тип акции:
   *
   * * `DIRECT_DISCOUNT` — прямая скидка.
   *
   * * `BLUE_FLASH` — флеш-акция.
   *
   * * `MARKET_PROMOCODE` — скидка по промокоду.
   */
  type: MechanicsType;
  /**
   * Информация для типа `MARKET_PROMOCODE`.
   *
   * Параметр заполняется только для этого типа акции.
   */
  promocodeInfo?: GetPromoPromocodeInfoDTO;
}

/** Информация об акции «Бестселлеры Маркета». */
export interface GetPromoBestsellerInfoDTO {
  /** Является ли акция «Бестселлером Маркета». Подробнее об этой акции читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/bestsellers). */
  bestseller: boolean;
  /**
   * До какой даты можно добавить товар в акцию «Бестселлеры Маркета».
   *
   * Параметр возвращается только для текущих и будущих акций «Бестселлеры Маркета».
   * @format date-time
   */
  entryDeadline?: string;
  /**
   * Включен ли автоматический перенос ассортимента между акциями «Бестселлеры Маркета». О том, как это работает, читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/marketing/promos/market/bestsellers#next).
   *
   * Параметр возвращается только для текущих и будущих акций «Бестселлеры Маркета».
   */
  renewalEnabled?: boolean;
}

/** Ограничения в акции. */
export interface GetPromoConstraintsDTO {
  /**
   * Идентификаторы складов, для которых действует акция. Товары, которые лежат на других складах, не будут продаваться по акции.
   *
   * Параметр возвращается, только если в условиях акции есть ограничение по складу.
   * @minItems 1
   * @uniqueItems true
   */
  warehouseIds?: number[] | null;
}

/** Информация об акции. */
export interface GetPromoDTO {
  /** Идентификатор акции. */
  id: string;
  /** Название акции. */
  name: string;
  /** Время проведения акции. */
  period: PromoPeriodDTO;
  /**
   * Участвует или участвовал ли продавец в этой акции.
   *
   * Для текущих и будущих акций возвращается со значением `true`, если в акции есть товары, которые были добавлены вручную. Если товары не участвуют в акции или добавлены в нее автоматически, параметр возвращается со значением `false`.
   *
   * Для прошедших акций всегда возвращается со значением `true`.
   *
   * Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index).
   */
  participating: boolean;
  /** Информация о товарах в акции. */
  assortmentInfo: GetPromoAssortmentInfoDTO;
  /** Информация о типе акции. */
  mechanicsInfo: GetPromoMechanicsInfoDTO;
  /** Информация об акции «Бестселлеры Маркета». */
  bestsellerInfo: GetPromoBestsellerInfoDTO;
  /**
   * Список каналов продвижения товаров.
   * @minItems 1
   * @uniqueItems true
   */
  channels?: ChannelType[] | null;
  /** Ограничения в акции. */
  constraints?: GetPromoConstraintsDTO;
}

/** Информация об акциях Маркета. */
export interface GetPromosResultDTO {
  /** Акции Маркета. */
  promos: GetPromoDTO[];
}

export type GetPromosResponse = ApiResponse & {
  /** Информация об акциях Маркета. */
  result?: GetPromosResultDTO;
};

/** Получение списка товаров, которые участвуют или могут участвовать в акции. */
export interface GetPromoOffersRequest {
  /** Идентификатор акции. */
  promoId: string;
  /**
   * {% note warning "Вместо него используйте `statuses`." %}
   *
   *
   *
   * {% endnote %}
   *
   * Фильтр для товаров, которые добавлены в акцию вручную.
   *
   * Если не передать параметр `statusType`, вернутся все товары.
   * @deprecated
   */
  statusType?: PromoOfferParticipationStatusFilterType;
  /**
   * Фильтр для товаров, которые могут участвовать в акции. Можно задать несколько значений.
   * @minItems 1
   * @uniqueItems true
   */
  statuses?: PromoOfferParticipationStatusMultiFilterType[] | null;
}

/** Параметры товара в акции с типом `DIRECT_DISCOUNT` или `BLUE_FLASH`. */
export interface PromoOfferDiscountParamsDTO {
  /**
   * Зачеркнутая цена — та, по которой товар продавался до акции.
   *
   * Указывается в рублях.
   *
   * Возвращается, только если товар участвует в акции.
   * @format int64
   */
  price?: number;
  /**
   * Цена по акции — та, по которой вы хотите продавать товар.
   *
   * Указывается в рублях.
   *
   * Возвращается, только если товар участвует в акции.
   * @format int64
   */
  promoPrice?: number;
  /**
   * Максимально возможная цена для участия в акции.
   *
   * Указывается в рублях.
   *
   * Возвращается для всех товаров.
   * @format int64
   */
  maxPromoPrice: number;
}

/**
 * Параметры товара в акции.
 *
 * Возвращается параметр, который соответствует типу акции.
 */
export interface PromoOfferParamsDTO {
  /** Параметры товара в акции с типом `DIRECT_DISCOUNT` или `BLUE_FLASH`. */
  discountParams?: PromoOfferDiscountParamsDTO;
}

/**
 * Информация об автоматическом добавлении товара в акцию.
 *
 * Причины, по которым товар не был добавлен автоматически в других магазинах, можно узнать в кабинете продавца на Маркете на странице акции.
 *
 * Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index).
 */
export interface PromoOfferAutoParticipatingDetailsDTO {
  /**
   * Идентификаторы кампаний тех магазинов, в которых товар добавлен в акцию автоматически.
   *
   * Возвращается, если статус товара в акции — `PARTIALLY_AUTO`.
   * @minItems 1
   * @uniqueItems true
   */
  campaignIds?: number[] | null;
}

/** Товар, который участвует или может участвовать в акции. */
export interface GetPromoOfferDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /**
   * Статус товара в акции:
   *
   * * `AUTO` — добавлен автоматически во всех магазинах кабинета, в которых товар доступен для покупки.
   *
   * * `PARTIALLY_AUTO` — добавлен автоматически у части магазинов.
   *
   * * `MANUAL` — добавлен вручную.
   *
   * * `NOT_PARTICIPATING` — не участвует в акции.
   *
   * * `RENEWED` — успешно перенесен из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».
   *
   * * `RENEW_FAILED` — не получилось перенести из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».
   *
   * * `MINIMUM_FOR_PROMOS` — участвует в акции с ценой `maxPromoPrice` ([установлен минимум по цене для акций](*minimumForBestseller), который соответствует порогу `maxPromoPrice`). Только для акций «Бестселлеры Маркета».
   *
   * Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index).
   */
  status: PromoOfferParticipationStatusType;
  /**
   * Параметры товара в акции.
   *
   * Возвращается параметр, который соответствует типу акции.
   */
  params: PromoOfferParamsDTO;
  /**
   * Информация об автоматическом добавлении товара в акцию.
   *
   * Причины, по которым товар не был добавлен автоматически в других магазинах, можно узнать в кабинете продавца на Маркете на странице акции.
   *
   * Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index).
   */
  autoParticipatingDetails?: PromoOfferAutoParticipatingDetailsDTO;
}

/** Список товаров, которые участвуют или могут участвовать в акции. */
export interface GetPromoOffersResultDTO {
  /** Товары, которые участвуют или могут участвовать в акции. */
  offers: GetPromoOfferDTO[];
  /** Идентификатор следующей страницы. */
  paging?: ForwardScrollingPagerDTO;
}

export type GetPromoOffersResponse = ApiResponse & {
  /** Список товаров, которые участвуют или могут участвовать в акции. */
  result?: GetPromoOffersResultDTO;
};

/**
 * Параметры товара в акции с типом `DIRECT_DISCOUNT` или `BLUE_FLASH`.
 *
 * Обязательный параметр для акций с этими типами.
 */
export interface UpdatePromoOfferDiscountParamsDTO {
  /**
   * Зачеркнутая цена — та, по которой товар продавался до акции.
   *
   * Указывается в рублях.
   *
   * Число должно быть целым.
   * @format int64
   * @min 1
   */
  price?: number;
  /**
   * Цена по акции — та, по которой вы хотите продавать товар.
   *
   * Указывается в рублях.
   *
   * Число должно быть целым.
   * @format int64
   * @min 1
   */
  promoPrice?: number;
}

/** Параметры товара, который участвует в акции. */
export interface UpdatePromoOfferParamsDTO {
  /**
   * Параметры товара в акции с типом `DIRECT_DISCOUNT` или `BLUE_FLASH`.
   *
   * Обязательный параметр для акций с этими типами.
   */
  discountParams?: UpdatePromoOfferDiscountParamsDTO;
}

/** Описание товаров, которые участвуют в акции. */
export interface UpdatePromoOfferDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /** Параметры товара, который участвует в акции. */
  params?: UpdatePromoOfferParamsDTO;
}

/**
 * Добавление товаров в акцию или обновление их параметров.
 *
 * Чтобы добавить товары в акцию или обновить параметры каких-то товаров, передайте их в параметре `offers`.
 */
export interface UpdatePromoOffersRequest {
  /** Идентификатор акции. */
  promoId: string;
  /**
   * Товары, которые необходимо добавить в акцию или цены которых нужно изменить.
   * @maxItems 500
   * @minItems 1
   */
  offers: UpdatePromoOfferDTO[];
}

/** Описание отклоненного изменения. */
export interface RejectedPromoOfferUpdateDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /**
   * Причина отклонения изменения:
   *
   * * `OFFER_DOES_NOT_EXIST` — в кабинете нет товара с таким SKU.
   *
   * * `OFFER_DUPLICATION` — один и тот же товар передан несколько раз.
   *
   * * `OFFER_NOT_ELIGIBLE_FOR_PROMO` — товар не подходит под условия акции.
   *
   * * `OFFER_PROMOS_MAX_BYTE_SIZE_EXCEEDED` — товар не добавлен в акцию по техническим причинам.
   *
   * * `DEADLINE_FOR_FOCUS_PROMOS_EXCEEDED` — истек срок добавления товаров в акцию.
   *
   * * `EMPTY_OLD_PRICE` — не указана зачеркнутая цена.
   *
   * * `EMPTY_PROMO_PRICE` — не указана цена по акции.
   *
   * * `MAX_PROMO_PRICE_EXCEEDED` — цена по акции превышает максимально возможную цену для участия в акции.
   *
   * * `PROMO_PRICE_BIGGER_THAN_MAX` — цена по акции больше 95% от зачеркнутой цены.
   *
   * * `PROMO_PRICE_SMALLER_THAN_MIN` — цена по акции меньше 1% от зачеркнутой цены.
   */
  reason: RejectedPromoOfferUpdateReasonType;
}

/** Предупреждение, которое появилось при добавлении товара в акцию или изменении его цен. */
export interface PromoOfferUpdateWarningDTO {
  /**
   * Предупреждение, которое появилось при добавлении товара:
   *
   * * `DEEP_DISCOUNT_OFFER` — большая разница с ценой в каталоге. Проверьте, нет ли ошибки.
   *
   * * `CATALOG_PRICE_IS_LOWER_THAN_PROMO` — цена, которая действует во всех магазинах, ниже цены по акции. У товара не будет отображаться цена по акции.
   *
   * * `SHOP_PRICES_ARE_LOWER_THAN_PROMO` — цена в отдельном магазине ниже цены по акции. У товара в акции будет отображаться цена в магазине. Для остальных магазинов будет действовать цена по акции.
   *
   * * `SHOP_OFFER_NOT_ELIGIBLE_FOR_PROMO` — товар в отдельном магазине не подходит под условия акции.
   */
  code: PromoOfferUpdateWarningCodeType;
  /**
   * Идентификаторы кампаний тех магазинов, для которых получены предупреждения.
   *
   * Не возвращается, если предупреждения действуют для всех магазинов в кабинете.
   * @minItems 1
   * @uniqueItems true
   */
  campaignIds?: number[] | null;
}

/** Описание предупреждения, которое появилось при добавлении товара. */
export interface WarningPromoOfferUpdateDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /** Предупреждения, которые появились при добавлении товара в акцию или изменении его цен. */
  warnings: PromoOfferUpdateWarningDTO[];
}

/** Ошибки и предупреждения, которые появились при добавлении товаров в акцию. */
export interface UpdatePromoOffersResultDTO {
  /**
   * Изменения, которые были отклонены.
   *
   * Возвращается, только если есть отклоненные изменения.
   * @minItems 1
   */
  rejectedOffers?: RejectedPromoOfferUpdateDTO[] | null;
  /**
   * Изменения, по которым есть предупреждения. Они информируют о возможных проблемах. Информация о товарах обновится.
   *
   * Возвращается, только если есть предупреждения.
   * @minItems 1
   */
  warningOffers?: WarningPromoOfferUpdateDTO[] | null;
}

/** Результат добавления товаров в акцию. */
export type UpdatePromoOffersResponse = ApiResponse & {
  /** Ошибки и предупреждения, которые появились при добавлении товаров в акцию. */
  result?: UpdatePromoOffersResultDTO;
};

/**
 * Удаление товаров из акции.
 *
 * Чтобы убрать:
 *
 * * все товары из акции и больше не участвовать в ней, передайте значение `true` в параметре `deleteAllOffers`;
 *
 * * часть товаров, передайте их идентификаторы в параметре `offersIds`.
 */
export interface DeletePromoOffersRequest {
  /** Идентификатор акции. */
  promoId: string;
  /** Чтобы убрать все товары из акции и больше не участвовать в ней, передайте значение `true` и не передавайте параметр `offerIds`. */
  deleteAllOffers?: boolean;
  /**
   * Товары, которые нужно убрать из акции.
   * @maxItems 500
   * @minItems 1
   * @uniqueItems true
   */
  offerIds?: ShopSku[] | null;
}

/** Информация о товаре и ошибки, которые появились при его удалении. */
export interface RejectedPromoOfferDeleteDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /**
   * Описание ошибки:
   *
   * * `OFFER_DOES_NOT_EXIST` — в кабинете нет товара с таким :no-translate[SKU].
   */
  reason: RejectedPromoOfferDeleteReasonType;
}

/**
 * Результат удаления товаров из акции.
 *
 * Возвращается, только если в запросе был передан параметр `offerIds`.
 */
export interface DeletePromoOffersResultDTO {
  /**
   * Товары, при удалении которых появились ошибки.
   *
   * Возвращается, только если есть такие товары.
   * @minItems 1
   */
  rejectedOffers?: RejectedPromoOfferDeleteDTO[] | null;
}

/** Результат удаления товаров из акции. */
export type DeletePromoOffersResponse = ApiResponse & {
  /**
   * Результат удаления товаров из акции.
   *
   * Возвращается, только если в запросе был передан параметр `offerIds`.
   */
  result?: DeletePromoOffersResultDTO;
};

/**
 * Идентификатор заявки.
 *
 * {% note warning "Используется только в :no-translate[API]" %}
 *
 * По нему не получится найти заявки в кабинете продавца на Маркете. Для этого используйте `marketplaceRequestId` или `warehouseRequestId`.
 *
 * {% endnote %}
 * @format int64
 * @min 1
 */
export type SupplyRequestId = number;

/** Параметры сортировки. */
export interface SupplyRequestSortingDTO {
  /**
   * Направление сортировки:
   *
   * - `ASC` — сортировка по возрастанию.
   * - `DESC` — сортировка по убыванию.
   */
  direction: SortOrderType;
  /**
   * По какому параметру сортировать заявки:
   *
   * * `ID` — идентификатор заявки.
   * * `REQUESTED_DATE` — дата поставки на склад хранения.
   *
   *     Если товары проходили через транзитный склад, сортирует по датам поставки на оба склада.
   * * `UPDATED_AT` — время обновления заявки.
   * * `STATUS` — статус заявки.
   */
  attribute: SupplyRequestSortAttributeType;
}

/**
 * Модель для фильтрации и сортировки заявок на поставку.
 * Фильтры по `requestDateFrom` и `requestDateTo` отбирают заявки по targetLocation->requestedDate и transitLocation->requestedDate.
 */
export interface GetSupplyRequestsRequest {
  /**
   * Идентификаторы заявок.
   * @maxItems 100
   * @minItems 1
   * @uniqueItems true
   */
  requestIds?: SupplyRequestId[] | null;
  /**
   * Дата начала периода для фильтрации заявок.
   * @format date-time
   */
  requestDateFrom?: string | null;
  /**
   * Дата окончания периода для фильтрации заявок.
   * @format date-time
   */
  requestDateTo?: string | null;
  /**
   * Типы заявок для фильтрации.
   * @minItems 1
   * @uniqueItems true
   */
  requestTypes?: SupplyRequestType[] | null;
  /**
   * Подтипы заявок для фильтрации.
   * @minItems 1
   * @uniqueItems true
   */
  requestSubtypes?: SupplyRequestSubType[] | null;
  /**
   * Статусы заявок для фильтрации.
   * @minItems 1
   * @uniqueItems true
   */
  requestStatuses?: SupplyRequestStatusType[] | null;
  /** Параметры сортировки. */
  sorting?: SupplyRequestSortingDTO;
}

/** Идентификатор и номера заявки. */
export interface SupplyRequestIdDTO {
  /**
   * Идентификатор заявки.
   *
   * {% note warning "Используется только в :no-translate[API]" %}
   *
   * По нему не получится найти заявки в кабинете продавца на Маркете. Для этого используйте `marketplaceRequestId` или `warehouseRequestId`.
   *
   * {% endnote %}
   */
  id: SupplyRequestId;
  /**
   * Номер заявки на маркетплейсе.
   *
   * Также указывается в кабинете продавца на Маркете.
   */
  marketplaceRequestId?: string;
  /**
   * Номер заявки на складе.
   *
   * Также указывается в кабинете продавца на Маркете.
   */
  warehouseRequestId?: string;
}

/** Количество товаров, коробок и палет в заявке. */
export interface SupplyRequestCountersDTO {
  /**
   * Количество товаров в заявке на поставку.
   * @format int32
   * @min 0
   */
  planCount?: number;
  /**
   * Количество товаров, которые приняты на складе.
   * @format int32
   * @min 0
   */
  factCount?: number;
  /**
   * Количество непринятых товаров.
   * @format int32
   * @min 0
   */
  undefinedCount?: number;
  /**
   * Количество лишних товаров.
   * @format int32
   * @min 0
   */
  surplusCount?: number;
  /**
   * Количество товаров с недостатками.
   * @format int32
   * @min 0
   */
  shortageCount?: number;
  /**
   * Количество товаров с браком.
   * @format int32
   * @min 0
   */
  defectCount?: number;
  /**
   * Количество товаров, которые можно привезти дополнительно.
   * @format int32
   * @min 0
   */
  acceptableCount?: number;
  /**
   * Количество товаров, которые нельзя привезти дополнительно.
   * @format int32
   * @min 0
   */
  unacceptableCount?: number;
  /**
   * Количество палет, которые приняты на складе.
   * @format int32
   * @min 0
   */
  actualPalletsCount?: number;
  /**
   * Количество коробок, которые приняты на складе.
   * @format int32
   * @min 0
   */
  actualBoxCount?: number;
}

/** Информация о связанных заявках. */
export interface SupplyRequestReferenceDTO {
  /** Идентификаторы связанной заявки. */
  id: SupplyRequestIdDTO;
  /** Тип связи. */
  type: SupplyRequestReferenceType;
}

/** Адрес склада или ПВЗ. */
export interface SupplyRequestLocationAddressDTO {
  /** Полный адрес склада или ПВЗ. */
  fullAddress: string;
  /** GPS-координаты широты и долготы. */
  gps: GpsDTO;
}

/** Информации о складе или ПВЗ в заявке. */
export interface SupplyRequestLocationDTO {
  /**
   * Дата и время поставки на склад или в ПВЗ.
   * @format date-time
   */
  requestedDate?: string;
  /**
   * Идентификатор склада или логистического партнера ПВЗ.
   * @format int64
   */
  serviceId: number;
  /** Название склада или ПВЗ. */
  name: string;
  /** Адрес склада или ПВЗ. */
  address: SupplyRequestLocationAddressDTO;
  /**
   * Тип склада или ПВЗ:
   *
   * * `FULFILLMENT` — склад хранения.
   * * `XDOC` — транзитный склад.
   * * `PICKUP_POINT` — ПВЗ.
   */
  type: SupplyRequestLocationType;
}

/** Информация о заявке на поставку, вывоз или утилизацию. */
export interface SupplyRequestDTO {
  /** Идентификатор и номера заявки. */
  id: SupplyRequestIdDTO;
  /** Тип заявки. */
  type: SupplyRequestType;
  /** Подтип заявки. */
  subtype: SupplyRequestSubType;
  /** Статус заявки. */
  status: SupplyRequestStatusType;
  /**
   * Дата и время последнего обновления заявки.
   * @format date-time
   */
  updatedAt: string;
  /** Количество товаров, коробок и палет в заявке. */
  counters: SupplyRequestCountersDTO;
  /** Ссылка на родительскую заявку. */
  parentLink?: SupplyRequestReferenceDTO | null;
  /**
   * Ссылки на дочерние заявки.
   * @minItems 1
   */
  childrenLinks?: SupplyRequestReferenceDTO[] | null;
  /** Информация о складе хранения или ПВЗ. */
  targetLocation: SupplyRequestLocationDTO;
  /** Информация о транзитном складе или ПВЗ. */
  transitLocation?: SupplyRequestLocationDTO;
}

/** Список заявок и информация по ним. */
export interface GetSupplyRequestsDTO {
  /**
   * Список заявок.
   * @maxItems 100
   * @minItems 0
   */
  requests: SupplyRequestDTO[];
  /** Информация о страницах с результатами. */
  paging?: ForwardScrollingPagerDTO;
}

export type GetSupplyRequestsResponse = ApiResponse & {
  /** Список заявок и информация по ним. */
  result?: GetSupplyRequestsDTO;
};

export interface GetSupplyRequestItemsRequest {
  /**
   * Идентификатор заявки.
   *
   * {% note warning "Используется только в :no-translate[API]" %}
   *
   * По нему не получится найти заявки в кабинете продавца на Маркете. Для этого используйте `marketplaceRequestId` или `warehouseRequestId`.
   *
   * {% endnote %}
   */
  requestId: SupplyRequestId;
}

/** Количество товаров в заявке. */
export interface SupplyRequestItemCountersDTO {
  /**
   * Количество товаров в заявке на поставку.
   * @format int32
   * @min 0
   */
  planCount?: number;
  /**
   * Количество товаров, которые приняты на складе.
   * @format int32
   * @min 0
   */
  factCount?: number;
  /**
   * Количество лишних товаров.
   * @format int32
   * @min 0
   */
  surplusCount?: number;
  /**
   * Количество товаров с недостатками.
   * @format int32
   * @min 0
   */
  shortageCount?: number;
  /**
   * Количество товаров с браком.
   * @format int32
   * @min 0
   */
  defectCount?: number;
}

/** Информация о товаре в заявке. */
export interface SupplyRequestItemDTO {
  /**
   * Ваш :no-translate[SKU] — идентификатор товара в вашей системе.
   *
   * Правила использования :no-translate[SKU]:
   *
   * * У каждого товара :no-translate[SKU] должен быть свой.
   *
   * * Уже заданный :no-translate[SKU] нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * :no-translate[SKU] товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * [Что такое :no-translate[SKU] и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)
   */
  offerId: ShopSku;
  /** Название товара. */
  name: string;
  /** Цена за единицу товара. */
  price?: CurrencyValueDTO;
  /** Количество товаров в заявке. */
  counters: SupplyRequestItemCountersDTO;
}

/** Информация о товарах в заявке. */
export interface GetSupplyRequestItemsDTO {
  /**
   * Список товаров.
   * @maxItems 100
   * @minItems 0
   */
  items: SupplyRequestItemDTO[];
  /** Информация о страницах с результатами. */
  paging?: ForwardScrollingPagerDTO;
}

export type GetSupplyRequestItemsResponse = ApiResponse & {
  /** Информация о товарах в заявке. */
  result?: GetSupplyRequestItemsDTO;
};

export interface GetSupplyRequestDocumentsRequest {
  /**
   * Идентификатор заявки.
   *
   * {% note warning "Используется только в :no-translate[API]" %}
   *
   * По нему не получится найти заявки в кабинете продавца на Маркете. Для этого используйте `marketplaceRequestId` или `warehouseRequestId`.
   *
   * {% endnote %}
   */
  requestId: SupplyRequestId;
}

/** Документ по заявке. */
export interface SupplyRequestDocumentDTO {
  /**
   * Тип документа:
   *
   * * **Документы, которые загружает магазин**
   *   * `SUPPLY` — список товаров.
   *   * `ADDITIONAL_SUPPLY` — список товаров в дополнительной поставке.
   *   * `VIRTUAL_DISTRIBUTION_CENTER_SUPPLY` — список товаров в [мультипоставке](:no-translate[*multisupply]).
   *   * `TRANSFER` — список товаров для утилизации.
   *   * `WITHDRAW` — список товаров для вывоза.
   *
   * * **Поставка товаров**
   *   * `VALIDATION_ERRORS` — ошибки по товарам в поставке.
   *   * `CARGO_UNITS` — ярлыки для грузомест.
   *
   * * **Дополнительная поставка и непринятые товары**
   *   * `ADDITIONAL_SUPPLY_ACCEPTABLE_GOODS` — товары, которые подходят для дополнительной поставки.
   *   * `ADDITIONAL_SUPPLY_UNACCEPTABLE_GOODS` — вывоз непринятых товаров.
   *
   * * **Маркировка товаров**
   *   * `INBOUND_UTD` — входящий УПД.
   *   * `OUTBOUND_UTD` — исходящий УПД.
   *   * `IDENTIFIERS` — коды маркировки товаров.
   *   * `CIS_FACT` — принятые товары с кодами маркировки.
   *   * `ITEMS_WITH_CISES` — товары, для которых нужна маркировка.
   *   * `REPORT_OF_WITHDRAW_WITH_CISES` — маркированные товары для вывоза со склада.
   *   * `SECONDARY_ACCEPTANCE_CISES` — маркированные товары, которые приняты после вторичной приемки.
   *   * `RNPT_FACT` — принятые товары с регистрационным номером партии товара (РНПТ).
   *
   * * **Акты**
   *   * `ACT_OF_WITHDRAW` — акт возврата.
   *   * `ANOMALY_CONTAINERS_WITHDRAW_ACT` — акт изъятия непринятого товара.
   *   * `ACT_OF_WITHDRAW_FROM_STORAGE` — акт списания с ответственного хранения.
   *   * `ACT_OF_RECEPTION_TRANSFER` — акт приема-передачи.
   *   * `ACT_OF_DISCREPANCY` — акт о расхождениях.
   *   * `SECONDARY_RECEPTION_ACT` — акт вторичной приемки.
   */
  type: SupplyRequestDocumentType;
  /** Ссылка на документ. */
  url: string;
  /**
   * Дата и время создания документа.
   * @format date-time
   */
  createdAt: string;
}

/** Информация о документах по заявке. */
export interface GetSupplyRequestDocumentsDTO {
  /**
   * Список документов.
   * @minItems 0
   */
  documents: SupplyRequestDocumentDTO[];
}

export type GetSupplyRequestDocumentsResponse = ApiResponse & {
  /** Информация о документах по заявке. */
  result?: GetSupplyRequestDocumentsDTO;
};

/** Информация о Api-Key-токене. */
export interface ApiKeyDTO {
  /**
   * Название токена.
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * Доступы к методам по Api-Key-токену.
   * @uniqueItems true
   */
  authScopes: ApiKeyScopeType[];
}

/** Информация об авторизационном токене. */
export interface TokenDTO {
  /** Информация о Api-Key-токене. */
  apiKey: ApiKeyDTO;
}

/** Ответ на запрос получения информации об авторизационном токене. */
export type GetTokenInfoResponse = ApiResponse & {
  /** Информация об авторизационном токене. */
  result: TokenDTO;
};
