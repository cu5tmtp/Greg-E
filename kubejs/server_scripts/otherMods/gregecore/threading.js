ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler()
        .itemInputs(
            '16x gtceu:witherite_wire_single_wire',
            '16x gtceu:abyssal_wire_single_wire',
            '16x gtceu:ancient_metal_single_wire',
            '4x kubejs:hvalloy',
            '8x #gtceu:circuits/hv',
            'gtceu:clean_machine_casing'
        )
        .itemOutputs(
            'gregecore:threading_one_machine'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(600)
        .circuit(16)

    event.recipes.gtceu.assembler()
        .itemInputs(
            '16x gtceu:ignitium_wire_single_wire',
            '16x #grege:powcell',
            '16x gtceu:enderium_wire_single_wire',
            '4x kubejs:luvalloy',
            '8x #gtceu:circuits/luv',
            'gtceu:luv_machine_hull',
            '4x gtceu:corelium_ingot'
        )
        .itemOutputs(
            'gregecore:threading_two_machine'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)
        .circuit(16)

    event.recipes.gtceu.assembler()
        .itemInputs(
            '16x gtceu:cursium_wire_single_wire',
            '16x gtceu:storm_wire_single_wire',
            '16x gregecore:draconium_cable_single_wire',
            '4x kubejs:animated/uhvalloy',
            '8x #gtceu:circuits/uhv',
            'gtceu:uhv_machine_hull',
            '4x gtceu:nectium_ingot'
        )
        .itemOutputs(
            'gregecore:threading_three_machine'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .circuit(16)


    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'botanicalextramachinery:crimson_ingot',
            'undergarden:forgotten_ingot',
            'ad_astra:calorite_ingot'
        )
        .itemOutputs(
            'gtceu:retium_ingot'
        )
        .inputFluids(
            'gtceu:nitrogen 150'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(700)
        .blastFurnaceTemp(2500)

    event.recipes.gtceu.lathe()
        .itemInputs(
            'gtceu:retium_ingot'
        )
        .itemOutputs(
            '2x gtceu:retium_rod'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(100)

    event.recipes.gtceu.forge_hammer()
        .itemInputs(
            '2x gtceu:retium_rod'
        )
        .itemOutputs(
            'gtceu:long_retium_rod'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(100)

    event.recipes.gtceu.fission_reaction()
        .itemInputs(
            '2x gtceu:long_retium_rod'
        )
        .itemOutputs(
            '2x gtceu:corelium_dust'
        )
        .addData('heatgen', 250)
        .duration(1000)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:corelium_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 150'
        )
        .itemOutputs(
            'gtceu:corelium_ingot'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(500)
        .blastFurnaceTemp(2500)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:coated_demonite_ingot',
            'kubejs:animated/uvalloy',
            'draconicevolution:draconium_ingot'
        )
        .itemOutputs(
            'gtceu:syncrium_ingot'
        )
        .inputFluids(
            'gtceu:nitrogen 150'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(700)
        .blastFurnaceTemp(7500)

    event.recipes.gtceu.lathe()
        .itemInputs(
            'gtceu:syncrium_ingot'
        )
        .itemOutputs(
            '2x gtceu:syncrium_rod'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)

    event.recipes.gtceu.forge_hammer()
        .itemInputs(
            '2x gtceu:syncrium_rod'
        )
        .itemOutputs(
            'gtceu:long_syncrium_rod'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)

    event.recipes.gtceu.fission_reaction()
        .itemInputs(
            '2x gtceu:long_syncrium_rod'
        )
        .itemOutputs(
            '2x gtceu:nectium_dust'
        )
        .addData('heatgen', 350)
        .duration(1000)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:nectium_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 150'
        )
        .itemOutputs(
            'gtceu:nectium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(500)
        .blastFurnaceTemp(7500)


})