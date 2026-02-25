ServerEvents.recipes((event) =>{ 
 event.shaped(
        Item.of('gtceu:zerogravmixer', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/luv',
            B: 'gtceu:luv_mixer',
            C: 'ad_extendra:neptunium_factory_block',
            D: 'gtceu:inert_machine_casing',
            E: 'gtceu:luv_machine_hull'
        }
    )

    event.recipes.gtceu
        .zerogravmixer('superelementgetthatshiiiii')
        .outputFluids(
            'gregecore:superelement27 1000'            
        )
        .inputFluids(
            'gregecore:jelenogas_gas 1000',
            'gregecore:verci_54 1000',
            'gregecore:manopered_36 1000',
            'gregecore:xenozene_gas 1000',
            'gregecore:nobalureium_gas 1000',
            'gregecore:quadractik_gas 1000',
            'gregecore:quenzin 1000',
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(1)
        .biome('ad_astra:mars_orbit')

    event.recipes.gtceu
        .zerogravmixer('getthemrareearth')
        .itemInputs(
            'kubejs:gassydust'
        )
        .chancedOutput('gtceu:rare_earth_dust', 100, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(2)
        .biome('ad_astra:mars_orbit')

});