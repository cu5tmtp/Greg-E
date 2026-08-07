ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:tartarustower', 1),
        [
            ' A ',
            'DBD',
            'ECE'
        ],
        {
            A: '#gtceu:circuits/zpm',
            B: 'gtceu:red_glass_lens',
            C: 'gtceu:luv_machine_hull',
            D: 'kubejs:machine_casing_block_dark_blue',
            E: 'kubejs:machine_casing_block_diamond'
        }
    )

    event.recipes.gtceu.tartarustower()
        .itemInputs(
            'bloodmagic:soulgempetty',
            '8x bloodmagic:basemonstersoul'
        )
        .itemOutputs(
            Item.of('bloodmagic:soulgempetty', '{souls:64.0d}')
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.tartarustower()
        .itemInputs(
            'bloodmagic:soulgemlesser',
            '16x bloodmagic:basemonstersoul'
        )
        .itemOutputs(
            Item.of('bloodmagic:soulgemlesser', '{souls:256.0d}')
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.tartarustower()
        .itemInputs(
            'bloodmagic:soulgemcommon',
            '32x bloodmagic:basemonstersoul'
        )
        .itemOutputs(
            Item.of('bloodmagic:soulgemcommon', '{souls:1024.0d}')
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.tartarustower()
        .itemInputs(
            'bloodmagic:soulgemgreater',
            '64x bloodmagic:basemonstersoul'
        )
        .itemOutputs(
            Item.of('bloodmagic:soulgemgreater', '{souls:4096.0d}')
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

})