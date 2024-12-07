import type { MindMapNode } from "../types";
import { getEdgesFromData, getNodesFromData } from "../utils";

export const glossaryNodes: MindMapNode[] = [
	{
		"id": "1",
		"term": "Стартап",
		"definition": "Компания с короткой историей операционной деятельности. Термин впервые использован Forbes в августе 1976 года и Business Week в сентябре 1977 года для обозначения компаний с короткой историей операционной деятельности.",
		"coordinate": {
			"x": 0,
			"y": 0
		}
	},
	{
		"id": "2",
		"term": "Бизнес-модель",
		"definition": "Логическое схематическое описание бизнеса, призванное помочь в оценке ключевых факторов успеха компании. Бизнес-модель отражает основные элементы бизнеса, включая продукт, потребителя, каналы сбыта и т.д.",
		"coordinate": {
			"x": 300,
			"y": -150
		}
	},
	{
		"id": "3",
		"term": "Минимально жизнеспособный продукт (MVP)",
		"definition": "Продукт, обладающий минимальными, но достаточными для удовлетворения первых потребителей функциями. Основная задача — получение обратной связи для формирования гипотез дальнейшего развития продукта.",
		"coordinate": {
			"x": 200,
			"y": 150
		}
	},
	{
		"id": "4",
		"term": "Питч",
		"definition": "Краткая структурированная презентация проекта перед потенциальными инвесторами с целью получения инвестиций. Питч длится от 30 секунд до 10 минут и должен содержать ключевую информацию о проекте.",
		"coordinate": {
			"x": -400,
			"y": 250
		}
	},
	{
		"id": "5",
		"term": "Инвестиции",
		"definition": "Размещение капитала с целью получения прибыли. Инвестиции являются неотъемлемой частью современной экономики. От кредитов инвестиции отличаются степенью риска для инвестора.",
		"coordinate": {
			"x": -240,
			"y": 120
		}
	},
	{
		"id": "6",
		"term": "Кофаундер",
		"definition": "Соучредитель компании, человек, принимавший участие в её создании с самого начала. Кофаундеры распределяют между собой ответственность, риски и будущую прибыль компании.",
		"coordinate": {
			"x": -50,
			"y": 200
		}
	},
	{
		"id": "7",
		"term": "Точка безубыточности",
		"definition": "Объём производства и реализации продукции, при котором расходы будут компенсированы доходами, а при производстве и реализации каждой последующей единицы продукции предприятие начинает получать прибыль.",
		"coordinate": {
			"x": 120,
			"y": -240
		}
	},
	{
		"id": "8",
		"term": "Гипотеза",
		"definition": "Предположение или догадка; утверждение, предполагающее доказательство. В бизнесе гипотезы используются для проверки жизнеспособности идей и принятия решений на основе данных.",
		"coordinate": {
			"x": 330,
			"y": 325
		}
	},
	{
		"id": "9",
		"term": "Целевая аудитория",
		"definition": "Группа людей, объединённая товаром и (или) услугой, на которую рассчитывают производители этого товара или услуги. Целевая аудитория является основой для проведения рекламных кампаний.",
		"coordinate": {
			"x": 500,
			"y": -250
		}
	},
	{
		"id": "10",
		"term": "Экзит",
		"definition": "Выход инвестора из инвестиционного проекта, продажа его доли в проекте. Экзит может осуществляться путём продажи доли стратегическому инвестору или через IPO.",
		"coordinate": {
			"x": 400,
			"y": 80
		}
	},
	{
		"id": "11",
		"term": "Акселератор",
		"definition": "Социальный институт поддержки стартапов. Понятие описывает как организации, так и программы интенсивного развития компаний через менторство, обучение, финансовую и экспертную поддержку в обмен на долю в капитале компании.",
		"coordinate": {
			"x": -250,
			"y": -210
		}
	},
	{
		"id": "12",
		"term": "Инкубатор",
		"definition": "Организация, занимающаяся поддержкой проектов молодых предпринимателей на всех этапах развития: от разработки идеи до её коммерциализации. Инкубаторы предоставляют начинающим предпринимателям помещения и консультационную помощь.",
		"coordinate": {
			"x": -450,
			"y": -120
		}
	},
	{
		"id": "13",
		"term": "Риски стартапа",
		"definition": "Вероятность возникновения убытков или недополучения доходов по сравнению с прогнозируемым вариантом. В стартапах риски особенно высоки из-за неопределённости рынка и новизны продукта.",
		"coordinate": {
			"x": -100,
			"y": -300
		}
	},
	{
		"id": "14",
		"term": "Продуктовый рынок",
		"definition": "Сфера обращения товара и его аналогов, в пределах которой покупатели при обычных условиях могут приобрести товар, и которая определяется исходя из возможности покупателя приобрести товар на определённой территории.",
		"coordinate": {
			"x": 430,
			"y": -70
		}
	},
	{
		"id": "15",
		"term": "Лидогенерация",
		"definition": "Маркетинговая тактика, направленная на поиск потенциальных клиентов с определёнными контактными данными. Лид — потенциальный клиент, отреагировавший на маркетинговую коммуникацию.",
		"coordinate": {
			"x": 200,
			"y": -400
		}
	},
	{
		"id": "16",
		"term": "Пивот",
		"definition": "Смена бизнес-модели компании, обычно сопровождающаяся сменой целевой аудитории, продукта или способа доставки продукта до клиента. Термин получил распространение в 2009 году благодаря Эрику Рису.",
		"coordinate": {
			"x": -200,
			"y": 400
		}
	}
];

export const glossaryEdges = [
	{
		"source": "1",
		"target": "3",
		"relation": "разрабатывает для тестирования"
	},
	{
		"source": "2",
		"target": "1",
		"relation": "описывает структуру",
		"marker": "end"
	},
	{
		"source": "5",
		"target": "4",
		"relation": "представляются через"
	},
	{
		"source": "1",
		"target": "5",
		"relation": "привлекает для развития"
	},
	{
		"source": "1",
		"target": "6",
		"relation": "создаётся и управляется"
	},
	{
		"source": "3",
		"target": "8",
		"relation": "проверяет"
	},
	{
		"source": "9",
		"target": "2",
		"relation": "является частью",
		"marker": "end"
	},
	{
		"source": "7",
		"target": "1",
		"relation": "важный показатель для",
		"marker": "end"
	},
	{
		"source": "1",
		"target": "10",
		"relation": "может завершиться через"
	},
	{
		"source": "11",
		"target": "1",
		"relation": "развивает и поддерживает",
		"marker": "end"
	},
	{
		"source": "12",
		"target": "1",
		"relation": "помогает на ранних этапах"
	},
	{
		"source": "13",
		"target": "1",
		"relation": "присущи из-за неопределённости",
		"marker": "end"
	},
	{
		"source": "14",
		"target": "1",
		"relation": "определяет сферу деятельности",
		"marker": "end"
	},
	{
		"source": "15",
		"target": "9",
		"relation": "находит и привлекает",
		"marker": "end"
	},
	{
		"source": "3",
		"target": "16",
		"relation": "может привести к"
	}
];

export const fallbackNodes = getNodesFromData(glossaryNodes);
export const fallbackEdges = getEdgesFromData(glossaryEdges);