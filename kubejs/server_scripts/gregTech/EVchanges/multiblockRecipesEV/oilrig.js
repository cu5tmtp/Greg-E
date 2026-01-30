ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:oilrig', 1),
        [
            ' A ',
            'BBB',
            'BCB'
        ],
        {
            A: '#gtceu:circuits/ev',
            B: 'gtceu:stainless_steel_frame',
            C: 'gtceu:ev_machine_hull',
        }
    )

    event.recipes.gtceu
        .oilrig('drilloil')
        .itemInputs(
            '2x kubejs:blessedearth'
        )
        .outputFluids(
            'gtceu:oil_medium 1000'
        )
        .duration(250)
        .EUt(1680)
        .circuit(1)

    event.recipes.gtceu
        .oilrig('drillplatinum')
        .itemInputs(
            '2x kubejs:blessedearth'
        )
        .itemOutputs(
            '4x gtceu:purified_pentlandite_ore'
        )
        .duration(200)
        .EUt(1680)
        .circuit(2)

    event.recipes.gtceu
        .oilrig('drilltungstate')
        .itemInputs(
            '2x kubejs:blessedearth'
        )
        .chancedOutput(
            'gtceu:raw_tungstate', 200, 0
        )
        .duration(200)
        .EUt(1680)
        .circuit(3)   

})