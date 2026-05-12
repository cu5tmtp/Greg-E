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
            C: 'gtceu:hv_machine_hull',
        }
    )

    event.recipes.gtceu.oilrig('drilloil')
        .itemInputs(
            'kubejs:earthlydust'
        )
        .outputFluids(
            'gtceu:oil_medium 1000'
        )
        .duration(250)
        .EUt(1680)
        .circuit(1)

    event.recipes.gtceu.oilrig('drillplatinum')
        .itemInputs(
            'kubejs:earthlydust'
        )
        .itemOutputs(
            '4x gtceu:purified_pentlandite_ore'
        )
        .duration(200)
        .EUt(1680)
        .circuit(2)

    event.recipes.gtceu.oilrig('drilltungstate')
        .itemInputs(
            'kubejs:earthlydust'
        )
        .chancedOutput(
            'gtceu:raw_tungstate', 200, 0
        )
        .duration(200)
        .EUt(1680)
        .circuit(3)   

    event.recipes.gtceu.oilrig('getthemrareeart')
        .itemInputs(
            'kubejs:earthlydust'
        )
        .chancedOutput('gtceu:rare_earth_dust', 200, 0)
        .duration(100)
        .circuit(4)
        .EUt(1680)

    event.recipes.gtceu.oilrig('magnesiumgetttt')
        .itemInputs(
            'kubejs:earthlydust'
        )
        .itemOutputs(
           '2x gtceu:magnesium_dust' 
        )
        .duration(100)
        .circuit(5)
        .EUt(1680)

    event.recipes.gtceu.oilrig('rutilegetttt')
        .itemInputs(
            'kubejs:earthlydust'
        )
        .itemOutputs(
            '2x gtceu:rutile_dust'
        )
        .duration(100)
        .circuit(6)
        .EUt(1680)

    event.recipes.gtceu.oilrig('tantalumgetttt')
        .itemInputs(
            'kubejs:earthlydust'
        )
        .chancedOutput('gtceu:tantalum_dust', 200, 0)
        .duration(100)
        .circuit(7)
        .EUt(1680)

    event.recipes.gtceu.oilrig('bariumgetttt')
        .itemInputs(
            'kubejs:earthlydust'
        )
        .chancedOutput('gtceu:barium_dust', 200, 0)
        .duration(100)
        .circuit(8)
        .EUt(1680)

    event.recipes.gtceu.oilrig('echoshardsssget')
        .itemInputs(
            'kubejs:earthlydust'
        )
        .itemOutputs(
            '4x minecraft:echo_shard'
        )
        .duration(100)
        .circuit(9)
        .EUt(1680)

})