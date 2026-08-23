ServerEvents.recipes((event) => {

    event.recipes.gtceu.macerator()
        .itemInputs(
            'gtceu:raw_delta_latgrium'
        )
        .itemOutputs(
            '2x gtceu:delta_latgrium_dust',
            'gtceu:chrono_percipitate_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(50)

    event.recipes.gtceu.extractor()
        .itemInputs(
            '4x gtceu:delta_latgrium_dust'
        )
        .outputFluids(
            'gtceu:delta_latgrium 500'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(350)
    
    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:delta_latgrium 1000'
        )
        .outputFluids(
            'gtceu:latgrium_oxide 650',
            'gtceu:oxygen 100',
            'gtceu:dichlorobenzene 250'
        )
        .chancedOutput('gtceu:particle_nu_dust', 1000, 0)
        .disableDistilleryRecipes(true)
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    event.recipes.gtceu.auxillaryfiltrator()
        .itemInputs(
            'gtceu:particle_nu_dust'
        )
        .itemOutputs(
            'gtceu:element_356_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:element_356_dust'
        )
        .itemOutputs(
            'gtceu:hot_element_356_ingot'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(3000)
        .blastFurnaceTemp(10000)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_element_356_ingot'
        )
        .itemOutputs(
            'gtceu:element_356_ingot'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            'gtceu:element_356_ingot'
        )
        .itemOutputs(
            '2x gtceu:element_356_single_wire'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            '2x gtceu:element_356_ingot'
        )
        .itemOutputs(
            'gtceu:element_356_double_wire'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)
        .circuit(2)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            '4x gtceu:element_356_ingot'
        )
        .itemOutputs(
            'gtceu:element_356_quadruple_wire'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .circuit(4)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            '8x gtceu:element_356_ingot'
        )
        .itemOutputs(
            'gtceu:element_356_octal_wire'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .circuit(8)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            '16x gtceu:element_356_ingot'
        )
        .itemOutputs(
            'gtceu:element_356_hex_wire'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .circuit(16)

    event.recipes.gtceu.autoclave()
        .inputFluids(
            'gtceu:latgrium_oxide 2500'
        )
        .itemOutputs(
            '2x gtceu:latgrium_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    event.recipes.gtceu.sifter()
        .itemInputs(
            'gtceu:particle_nu_dust'
        )
        .itemOutputs(
            '4x gtceu:latgrium_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.extractor()
        .itemInputs(
            '16x gtceu:latgrium_dust'
        )
        .outputFluids(
            'gtceu:latgrium 1000'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    event.recipes.gtceu.fluid_solidifier()
        .inputFluids(
            'gtceu:latgrium 500'
        )
        .itemOutputs(
            'kubejs:latgriumraw'
        )
        .notConsumable('kubejs:latgriummold')
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'kubejs:latgriumraw',
            '16x gtceu:element_356_single_wire'
        )
        .inputFluids(
            'gtceu:sodium_persulfate 10000'
        )
        .itemOutputs(
            'kubejs:latgriumboard'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(500)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'kubejs:latgriumraw',
            '16x gtceu:element_356_single_wire'
        )
        .inputFluids(
            'gtceu:iron_iii_chloride 5000'
        )
        .itemOutputs(
            'kubejs:latgriumboard'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(500)

})