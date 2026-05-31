ServerEvents.recipes((event) => {

    event.recipes.gtceu.macerator()
        .itemInputs(
            'kubejs:tooth'
        )
        .itemOutputs(
            'gtceu:troll_tooth_dust'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)

    event.recipes.gtceu.chemical_bath()
        .itemInputs(
            'gtceu:troll_tooth_dust'
        )
        .inputFluids(
            'gtceu:sulfuric_acid 150'
        )
        .itemOutputs(
            'gtceu:purified_troll_tooth_dust'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)

    event.recipes.gtceu.electrolyzer()
        .itemInputs(
            'gtceu:purified_troll_tooth_dust'
        )
        .itemOutputs(
            '2x gtceu:troglodyum_dust',
            '2x gtceu:calcium_dust',
            'gtceu:phosphorus_dust'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:troglodyum_dust'
        )
        .itemOutputs(
            'gtceu:troglodyum_ingot',
        )
        .blastFurnaceTemp(1800)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu
        .alchtransformer('transformcommontdeepslate2')
        .itemInputs(
            '2x kubejs:commonearth',
            'gtceu:troglodyum_ingot'
        )   
        .inputFluids(
            'kubejs:alchessence 250'
        ) 
        .itemOutputs(
            '3x kubejs:deepslateearth'
        )
        .duration(100)
        .EUt(120)
        .circuit(2)

})