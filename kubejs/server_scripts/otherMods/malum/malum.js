//Code from Atobá Azul from the Malum discord server, thanks!
//Thank you Malum team for releasing KubeJS integration for only 1.21!!!
const parseItem = (item) => {
	if (typeof item === 'string') {
		const match = item.match(/^(\d+)x\s*(.+)$/);
		if (match) {
			const identifier = match[2];
			if (identifier.includes('#')) {
				const tag = identifier.split('#').pop().trim();
				return { count: parseInt(match[1]), tag: tag };
			}
			return { count: parseInt(match[1]), item: identifier };
		}
		if (item.includes('#')) {
			const tag = item.split('#').pop().trim();
			return { count: 1, tag: tag };
		}
		return { count: 1, item: item };
	}
	return item;
};

const parseExtraItems = (items) => {
	if (!items) return [];
	return items.map(parseItem);
};

const parseSpirits = (spirits) => {
	if (!spirits) return [];
	const spiritArray = Array.isArray(spirits) ? spirits : [spirits];
	return spiritArray.map((spirit) => {
		const match = spirit.match(/^(\d+)x\s*(.+)$/);
		if (match) {
			return { type: match[2], count: parseInt(match[1]) };
		}
		return { type: spirit, count: 1 };
	});
};

global.generateSpiritInfusionRecipe = function (
    output,
    input,
    spirits,
    extra_items
) {
    const data = {
        type: 'malum:spirit_infusion',
        output: parseItem(output),
        input: parseItem(input),
        spirits: parseSpirits(spirits),
        extra_items: parseExtraItems(extra_items),
    };

    return data;
};

ServerEvents.recipes((event) => {

    //'sacred'|'wicked'|'arcane'|'eldritch'|'aerial'|'aqueous'|'earthen'|'infernal'>|'sacred'|'wicked'|'arcane'|'eldritch'|'aerial'|'aqueous'|'earthen'|'infernal'
    function SpiritInfusion(output, input, spirits, extra_items) {
        return event.custom(
            global.generateSpiritInfusionRecipe(
                output,
                input,
                spirits,
                extra_items
            )
        );
    }

  SpiritInfusion(
    'minecraft:stone', 
    'minecraft:cobblestone',
    ['32x arcane', '8x infernal', '12x earthen', '4x sacred'],
    ['4x amethyst_block', 'diamond', '8x malum:tainted_rock']
  );
})