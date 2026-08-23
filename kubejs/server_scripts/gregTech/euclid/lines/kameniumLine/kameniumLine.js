ServerEvents.recipes((event) => {

    event.recipes.gtceu.advanced_fusion("kameniumgetyes")
        .itemInputs(
            '16x gtceu:amethyst_dust',
            '16x gtceu:amethyst_dust'
        )
        .itemOutputs(
            '4x gtceu:kamenium_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .addData('heat_level', 3800)

    event.recipes.gtceu.autoclave()
        .itemInputs(
            'gtceu:kamenium_dust'
        )
        .inputFluids(
            'gtceu:nebulon_alpha 150'
        )
        .itemOutputs(
            'gtceu:flawless_kamenium_gem'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(250)

    event.recipes.gtceu.autoclave()
        .itemInputs(
            '2x gtceu:flawless_kamenium_gem'
        )
        .inputFluids(
            'gtceu:nebulon_alpha 150'
        )
        .itemOutputs(
            'gtceu:exquisite_kamenium_gem'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(250)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            'gtceu:exquisite_kamenium_gem'
        )
        .itemOutputs(
            'gtceu:reinforced_kamenium_dust'
        )
        .addData('pa', 85)
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:reinforced_kamenium_dust'
        )
        .itemOutputs(
            'gtceu:hot_reinforced_kamenium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1000)
        .blastFurnaceTemp(10000)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_reinforced_kamenium_ingot'
        )
        .itemOutputs(
            'gtceu:reinforced_kamenium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:reinforced_kamenium_ingot'
        )
        .itemOutputs(
            'gtceu:reinforced_kamenium_block'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(150)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            'gtceu:reinforced_kamenium_ingot'
        )
        .itemOutputs(
            '2x gtceu:reinforced_kamenium_single_wire'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(150)
        .circuit(1)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:reinforced_kamenium_ingot'
        )
        .itemOutputs(
            'gtceu:reinforced_kamenium_plate'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(150)
        .circuit(1)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'kubejs:redsedimentboard',
            '16x gtceu:reinforced_kamenium_single_wire'
        )
        .inputFluids(
            'gtceu:sodium_persulfate 10000'
        )
        .itemOutputs(
            'kubejs:redsedimentcircuitboard'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(500)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'kubejs:redsedimentboard',
            '16x gtceu:reinforced_kamenium_single_wire'
        )
        .inputFluids(
            'gtceu:iron_iii_chloride 5000'
        )
        .itemOutputs(
            'kubejs:redsedimentcircuitboard'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(500)

})