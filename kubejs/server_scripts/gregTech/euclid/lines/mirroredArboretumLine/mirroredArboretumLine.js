ServerEvents.recipes((event) => {

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:atomicmesh_dust',
            'gtceu:prismalium_dust'
        )
        .inputFluids(
            'gtceu:lambda_particles 500'
        )
        .outputFluids(
            'gtceu:spacetime 1000'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(350)
        .circuit(3)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'kubejs:fading'
        )
        .inputFluids(
            'gtceu:spacetime 750'
        )
        .itemOutputs(
            'gtceu:stabilizedarboretum_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .circuit(3)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:basiliskium_dust',
            '4x gtceu:bindingdust_dust',
            'gtceu:reinforced_delirium_dust'
        )
        .inputFluids(
            'gtceu:hydrogen 1500'
        )
        .itemOutputs(
            '2x gtceu:antidestabilizant_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:stabilizedarboretum_dust',
            'gtceu:antidestabilizant_dust'
        )
        .itemOutputs(
            'gtceu:stabilizedarboretum_ingot'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .blastFurnaceTemp(10000)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            'gtceu:stabilizedarboretum_ingot'
        )
        .itemOutputs(
            '2x gtceu:stabilizedarboretum_single_wire'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            'gtceu:stabilizedarboretum_ingot'
        )
        .itemOutputs(
            '8x gtceu:fine_stabilizedarboretum_wire'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .circuit(3)
        
})