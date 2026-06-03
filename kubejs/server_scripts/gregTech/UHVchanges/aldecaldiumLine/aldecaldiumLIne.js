ServerEvents.recipes((event) => {

    event.recipes.gtceu.specialoreprocessingplant()
        .itemInputs(
            'gtceu:raw_aldecaldium'
        )
        .outputFluids(
            'gtceu:panamium 500',
            'gtceu:saulium 1200'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(270)

    event.recipes.gtceu.centrifuge()
        .inputFluids(
            'gtceu:panamium 1000'
        )
        .itemOutputs(
            '2x gtceu:panamium_dust',
            'gtceu:small_steel_dust',
            '6x gtceu:quartz_sand_dust'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:panamium_dust'
        )
        .inputFluids(
            'gtceu:neon 50'
        )
        .itemOutputs(
            'gtceu:hot_panamium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(800)
        .blastFurnaceTemp(3900)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_panamium_ingot'
        )
        .itemOutputs(
            'gtceu:panamium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:panamium_ingot'
        )
        .itemOutputs(
            '4x gtceu:panamium_foil'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .circuit(10)

    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:saulium 1000'
        )
        .outputFluids(
            'gtceu:scorpium 350',
            'gtceu:dakotium 250',
            'gtceu:mitchium 300'
        )
        .chancedOutput('gtceu:quartz_sand_dust', 500, 0)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(300)
        .disableDistilleryRecipes(true)

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:scorpium 175',
            'gtceu:mitchium 150'
        )
        .itemInputs(
            'gtceu:steel_dust'
        )
        .itemOutputs(
            'gtceu:dirty_basiliskium_dust'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(150)

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:dakotium 200',
        )
        .itemInputs(
            'gtceu:dirty_basiliskium_dust'
        )
        .itemOutputs(
            'gtceu:basiliskium_dust'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:basiliskium_dust'
        )
        .inputFluids(
            'gtceu:neon 50'
        )
        .itemOutputs(
            'gtceu:hot_basiliskium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(800)
        .blastFurnaceTemp(5900)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_basiliskium_ingot'
        )
        .itemOutputs(
            'gtceu:basiliskium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            'gtceu:basiliskium_ingot'
        )
        .itemOutputs(
            '8x gtceu:fine_basiliskium_wire'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .circuit(3)

})