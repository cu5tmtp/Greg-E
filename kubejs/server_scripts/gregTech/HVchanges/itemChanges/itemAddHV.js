ServerEvents.recipes((event) =>{

    //Changing the aquisition of end portal frame
    event.remove('minecraft:end_portal_frame')
    event.remove('gardenofglass:end_portal_frame')

    event.shaped(
        Item.of('minecraft:end_portal_frame', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ad_astra:moon_stone',
            B: 'gtceu:stainless_steel_ingot'
        }
    )

    event.replaceInput(
        'dimstorage:dim_core',
        'minecraft:diamond',
        'kubejs:voidhole'
    )
})