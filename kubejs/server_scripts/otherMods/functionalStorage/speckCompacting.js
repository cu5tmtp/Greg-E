// Functional Storage compacting drawer support for the Common Earth centrifuge specks.
// Uses functionalstorage:custom_compacting instead of reverse crafting recipes so
// ProjectE's crafting mapper does not assign EMC to specks/piles.
ServerEvents.recipes((event) => {

    const chains = [
        // [speck, pile, final item]
        ['kubejs:quartzspeck', 'kubejs:quartzspile', 'minecraft:quartz'],
        ['kubejs:cquartzspeck', 'kubejs:cquartzspile', 'ae2:certus_quartz_crystal'],
        ['kubejs:gspeck', 'kubejs:gspile', 'gtceu:gold_dust'],
        ['kubejs:dshard', 'kubejs:dcluster', 'minecraft:diamond'],
        ['kubejs:lapisspeck', 'kubejs:lapisspile', 'minecraft:lapis_lazuli']
    ]

    const compact = (higher, lower, id) => {
        event.custom({
            type: 'functionalstorage:custom_compacting',
            higher_input: { item: higher, count: 1 },
            lower_input: { item: lower, count: 9 }
        }).id(`grege:functionalstorage/compacting/${id}`)
    }

    chains.forEach(([speck, pile, result]) => {
        const name = speck.split(':')[1]
        compact(pile, speck, `${name}_to_pile`)
        compact(result, pile, `${name}_pile_to_result`)
    })

})
