ServerEvents.recipes((event) => {

    event.replaceInput(
        { id: 'botania:apothecary_default' },
        '#botania:petals',
        'kubejs:lvalloy'
    )

    event.replaceInput(
        { id: 'botanicalmachinery:mana_battery' },
        'botanicalmachinery:mana_emerald_block',
        'kubejs:vanaheimingotblock'
    )

    const bm_machines = [
    'alfheim_market',
    'industrial_agglomeration_factory',
    'mechanical_apothecary',
    'mechanical_brewery',
    'mechanical_daisy',
    'mechanical_mana_pool',
    'mechanical_runic_altar'
    ]

    bm_machines.forEach(machine => {
    event.replaceInput(
        { id: 'botanicalmachinery:' + machine },
        'botania:aura_ring_greater',
        'kubejs:vanaheimingotblock'
        )
    })

    event.remove({ id: 'mythicbotany:kvasir_mead'})

    event.recipes.botania.mana_infusion('kubejs:dewvial', 'botania:vial', 1000)
    event.recipes.botania.mana_infusion('2x kubejs:vanaheimingot', 'kubejs:vanaheimingot', 10000, 'botania:conjuration_catalyst')
    event.recipes.botania.mana_infusion('2x kubejs:solidacidinfusedlava', 'kubejs:solidacidinfusedlava', 1000, 'botania:conjuration_catalyst')
});