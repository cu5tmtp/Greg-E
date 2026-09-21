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
            'gregecore:superelement27 144'            
        )
        .inputFluids(
            'gregecore:jelenogas_gas 5000',
            'gregecore:quenzin 5000',
            'gregecore:xenozene_gas 5000',
            'gregecore:quadractik_gas 5000',
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(1)
        .dimension('ad_astra:mars_orbit')

    event.recipes.gtceu
        .zerogravmixer('superelementgetthatshiiiii2')
        .outputFluids(
            'gregecore:superelement27 288'            
        )
        .inputFluids(
            'gregecore:jelenogas_gas 3500',
            'gregecore:quenzin 3500',
            'gregecore:xenozene_gas 3500',
            'gregecore:quadractik_gas 3500',
            'gregecore:manopered_36 3500',
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(2)
        .dimension('ad_astra:mars_orbit')

    event.recipes.gtceu
        .zerogravmixer('superelementgetthatshiiiii3')
        .outputFluids(
            'gregecore:superelement27 576'            
        )
        .inputFluids(
            'gregecore:jelenogas_gas 2000',
            'gregecore:quenzin 2000',
            'gregecore:xenozene_gas 2000',
            'gregecore:quadractik_gas 2000',
            'gregecore:manopered_36 2000',
            'gregecore:verci_54 2000',
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(3)
        .dimension('ad_astra:mars_orbit')

    event.recipes.gtceu
        .zerogravmixer('superelementgetthatshiiiii4')
        .outputFluids(
            'gregecore:superelement27 1152'            
        )
        .inputFluids(
            'gregecore:jelenogas_gas 1000',
            'gregecore:quenzin 1000',
            'gregecore:xenozene_gas 1000',
            'gregecore:quadractik_gas 1000',
            'gregecore:manopered_36 1000',
            'gregecore:verci_54 1000',
            'gregecore:nobalureium_gas 1000',
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(4)
        .dimension('ad_astra:mars_orbit')

});