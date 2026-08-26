ServerEvents.recipes((event) => {

    event.recipes.gtceu.antimassspectro()
        .itemInputs(
            '#forge:tools/crowbars'
        )
        .outputFluids(
            'gtceu:lambda_particles 5000'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(350)

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:lambda_particles 7500',
            'gtceu:hydrogen 3500'
        )
        .itemInputs(
            '4x gtceu:stabilized_nyxium_dust'
        )
        .outputFluids(
            'gtceu:lambda_hydronyxium_solution 1500'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4350)

    event.recipes.gtceu.tectonicdisruptor()
        .itemInputs(
            'kubejs:mirrorofkalandra'
        )
        .itemOutputs(
            '8x gtceu:raw_grympl3'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(250)
        .circuit(7)

    event.recipes.gtceu.specialoreprocessingplant()
        .itemInputs(
            'gtceu:raw_grympl3'
        )
        .itemOutputs(
            '2x gtceu:grympl3_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(450)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            '4x gtceu:grympl3_dust'
        )
        .inputFluids(
            'gtceu:lambda_hydronyxium_solution 2000'
        )
        .outputFluids(
            'gtceu:impuregrympl2 660',
            'gtceu:grympl1 330'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(850)

    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:impuregrympl2 750'
        )
        .outputFluids(
            'gtceu:indium_concentrate 350',
            'gtceu:grympl2 200'
        )
        .chancedOutput(
            'gtceu:stabilized_nyxium_dust', 7500, 0
        )
        .disableDistilleryRecipes(true)
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(350)

    event.recipes.gtceu.advanced_fusion("frebcjhbcjsaxbawoefhvoeslnlwksnlflerkwnglendce")
        .inputFluids(
            'gtceu:grympl2 500',
            'gtceu:stellarium 500'
        )
        .outputFluids(
            'gtceu:stellarium_grympl2 1000'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .addData('heat_level', 4300)

    event.recipes.gtceu.atomicreversator()
        .inputFluids(
            'gtceu:grympl1 500'
        )
        .outputFluids(
            'gtceu:mirrored_grympl1 500'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    event.recipes.gtceu.fluid_solidifier()
        .inputFluids(
            'gtceu:mirrored_grympl1 144'
        )
        .itemOutputs(
            'gtceu:mirrored_grympl1_ingot'
        )
        .notConsumable('gtceu:ingot_casting_mold')
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:mirrored_grympl1_ingot'
        )
        .itemOutputs(
            'gtceu:mirrored_grympl1_block'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.atomicreversator()
        .itemInputs(
            'gtceu:mirrored_grympl1_ingot'
        )
        .itemOutputs(
            'gtceu:grympl1_ingot'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    event.recipes.gtceu.macerator()
        .itemInputs(
            'gtceu:grympl1_ingot'
        )
        .itemOutputs(
            'gtceu:grympl1_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(50)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:grympl1_dust'
        )
        .inputFluids(
            'gtceu:stellarium_grympl2 500'
        )
        .outputFluids(
            'gtceu:sgrympl_slurry 750'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(450)

    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:sgrympl_slurry 1000'
        )
        .outputFluids(
            'gtceu:supergrympl 500',
            'gtceu:grymploxideepoxilidas 250',
            'gtceu:hydrogen 1000'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(550)
        .disableDistilleryRecipes(true)

    event.recipes.gtceu.fluid_solidifier()
        .inputFluids(
            'gtceu:supergrympl 144'
        )
        .itemOutputs(
            'gtceu:supergrympl_ingot'
        )
        .notConsumable('gtceu:ingot_casting_mold')
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:supergrympl_ingot'
        )
        .itemOutputs(
            'gtceu:supergrympl_block'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:supergrympl_ingot'
        )
        .itemOutputs(
            'gtceu:supergrympl_plate'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.fluid_solidifier()
        .inputFluids(
            'gtceu:grymploxideepoxilidas 144'
        )
        .itemOutputs(
            'gtceu:grymploxideepoxilidas_ingot'
        )
        .notConsumable('gtceu:ingot_casting_mold')
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.extruder()
        .itemInputs(
            'gtceu:grymploxideepoxilidas_ingot'
        )
        .itemOutputs(
            '2x gtceu:grymploxideepoxilidas_ring'
        )
        .notConsumable('gtceu:ring_extruder_mold')
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.extruder()
        .itemInputs(
            'gtceu:grymploxideepoxilidas_ingot'
        )
        .itemOutputs(
            '4x gtceu:grymploxideepoxilidas_bolt'
        )
        .notConsumable('gtceu:bolt_extruder_mold')
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.extruder()
        .itemInputs(
            'gtceu:grymploxideepoxilidas_ingot'
        )
        .itemOutputs(
            '2x gtceu:grymploxideepoxilidas_rod'
        )
        .notConsumable('gtceu:rod_extruder_mold')
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.lathe()
        .itemInputs(
            'gtceu:grymploxideepoxilidas_bolt'
        )
        .itemOutputs(
            'gtceu:grymploxideepoxilidas_screw'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:grymploxideepoxilidas_ingot'
        )
        .itemOutputs(
            'gtceu:grymploxideepoxilidas_plate'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:mirrored_grympl1_ingot'
        )
        .itemOutputs(
            'gtceu:mirrored_grympl1_plate'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

})