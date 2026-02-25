ServerEvents.recipes((event) =>{ 
 event.shaped(
        Item.of('gtceu:planetarygassiphon', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/luv',
            B: 'gregecore:vibration_engine_intake',
            C: 'gtceu:fine_steel_wire',
            D: 'gtceu:vibration_safe_casing',
            E: 'gtceu:luv_machine_hull'
        }
    )

    event.recipes.gtceu
        .planetarygassiphon('siphonearth')
        .outputFluids(
            'gtceu:nitrogen 78000',
            'gtceu:oxygen 21000',
            'gtceu:argon 900',
            'gregecore:jelenogas_gas 100'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(1)
        .biome('ad_astra:orbit')

    event.recipes.gtceu
        .planetarygassiphon('siphonvenus')
        .outputFluids(
            'gtceu:carbon_dioxide 96500',
            'gtceu:nitrogen 3400',
            'gregecore:xenozene_gas 100'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(2)
        .biome('ad_astra:venus_orbit')

    event.recipes.gtceu
        .planetarygassiphon('siphonjupiter')
        .outputFluids(
            'gtceu:hydrogen 89800',
            'gtceu:helium 10100',
            'gregecore:quadractik_gas 100'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(3)
        .biome('ad_extendra:jupiter_orbit')

    event.recipes.gtceu
        .planetarygassiphon('siphonsaturn')
        .outputFluids(
            'gtceu:hydrogen 96100',
            'gtceu:helium 3250',
            'gtceu:methane 450',
            'gtceu:ammonia 100',
            'gregecore:manopered_36 100'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(4)
        .biome('ad_extendra:saturn_orbit')

    event.recipes.gtceu
        .planetarygassiphon('siphonuranus')
        .outputFluids(
            'gtceu:hydrogen 82400',
            'gtceu:helium 15200',
            'gtceu:methane 2300',
            'gregecore:nobalureium_gas 100'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(5)
        .biome('ad_extendra:uranus_orbit')

    event.recipes.gtceu
        .planetarygassiphon('siphonneptune')
        .outputFluids(
            'gtceu:hydrogen 80000',
            'gtceu:helium 18500',
            'gtceu:methane 1400',
            'gregecore:verci_54 100'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(6)
        .biome('ad_extendra:neptune_orbit')

    event.recipes.gtceu
        .planetarygassiphon('siphonsolarstorms')
        .outputFluids(
            'gregecore:superheated_solar 99900',
            'gregecore:quenzin 100'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(7)
        .biome('ad_astra:mercury_orbit')

    event.recipes.gtceu
        .planetarygassiphon('siphongassydust')
        .itemOutputs(
            'kubejs:gassydust'
        )
        .itemInputs(
            '2x kubejs:eidust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(8)
        .biome('ad_astra:mercury_orbit')
});