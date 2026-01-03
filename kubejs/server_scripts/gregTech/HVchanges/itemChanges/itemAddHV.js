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
            B: 'minecraft:ender_eye'
        }
    )

    event.replaceInput(
        'dimstorage:dim_core',
        'minecraft:diamond',
        'kubejs:voidhole'
    )
})