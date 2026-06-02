ServerEvents.recipes((event) => {
 
    event.recipes.gtceu.specialoreprocessingplant()
        .itemInputs(
            'gtceu:raw_zenithium'
        )
        .itemOutputs(
            '3x gtceu:zenithium_slurry_dust'
        )
        .inputFluids(
            'gtceu:sulfuric_acid 850'
        )
        .outputFluids(
            'gtceu:zenithium_slurry 600'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(300)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:zenithium_slurry_dust'
        )
        .inputFluids(
            'gtceu:argon 50'
        )
        .itemOutputs(
            'gtceu:hot_zenithium_ingot',
            'gtceu:iron_dust'
        )
        .outputFluids(
            'gtceu:sulfuric_acid 150'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(500)
        .blastFurnaceTemp(5000)
    
    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_zenithium_ingot'
        )
        .itemOutputs(
            'gtceu:zenithium_ingot'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:zenithium_ingot'
        )
        .itemOutputs(
            'gtceu:zenithium_plate'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(1)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:zenithium_ingot'
        )
        .itemOutputs(
            '4x gtceu:zenithium_foil'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(10)

    event.recipes.gtceu.fusion_reactor()
        .inputFluids(
            'gtceu:zenithium_slurry 16',
            'gtceu:niobium 16'
        )
        .outputFluids(
            'gtceu:niobium_zenithium 16'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.LuV])
        .fusionStartEU(150000000)

    event.recipes.gtceu.advanced_fusion()
        .inputFluids(
            'gtceu:zenithium_slurry 1600',
            'gtceu:niobium 1600'
        )
        .outputFluids(
            'gtceu:niobium_zenithium 1600'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .addData('heat_level', 3200)

    event.recipes.gtceu.canner()
        .inputFluids(
            'gtceu:niobium_zenithium 144'
        )
        .itemInputs(
            'gtceu:empty_spray_can'
        )
        .itemOutputs(
            'kubejs:niobiumcoating'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler()
        .itemInputs(
            'kubejs:niobiumcoating',
            'gtceu:zenithium_plate'
        )
        .itemOutputs(
            'gtceu:niobium_coated_plate'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(6)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:niobium_coated_plate'
        )
        .itemOutputs(
            '4x gtceu:niobium_coated_foil'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(10)






})