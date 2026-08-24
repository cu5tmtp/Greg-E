ServerEvents.recipes((event) => {
    const longRods = [
        'gtceu:long_rose_gold_rod',
        'gtceu:long_nebulon_alpha_rod',
        'gtceu:long_cobalt_brass_rod',
        'gtceu:long_niobium_titanium_rod',
        'gtceu:long_neutronium_rod',
        'gtceu:long_aluminium_rod',
        'gtceu:long_kanthal_rod',
        'gtceu:long_silver_rod',
        'gtceu:long_sterling_silver_rod',
        'gtceu:long_retium_rod',
        'gtceu:long_bronze_rod',
        'gtceu:long_red_steel_rod',
        'gtceu:long_hssg_rod',
        'gtceu:long_tungsten_carbide_rod',
        'gtceu:long_titanium_rod',
        'gtceu:long_iridium_rod',
        'gtceu:long_brass_rod',
        'gtceu:long_hsss_rod',
        'gtceu:long_tungsten_steel_rod',
        'gtceu:long_europium_rod',
        'gtceu:long_tin_rod',
        'gtceu:long_wrought_iron_rod',
        'gtceu:long_trinium_rod',
        'gtceu:long_samarium_rod',
        'gtceu:long_nichrome_rod',
        'gtceu:long_electrum_rod',
        'gtceu:long_vanadium_gallium_rod',
        'gtceu:long_annealed_copper_rod',
        'gtceu:long_syncrium_rod',
        'gtceu:long_invar_rod',
        'gtceu:long_platinum_rod',
        'gtceu:long_hsse_rod',
        'gtceu:long_gold_rod',
        'gtceu:long_potin_rod',
        'gtceu:long_osmium_rod',
        'gtceu:long_damascus_steel_rod',
        'gtceu:long_ultimet_rod',
        'gtceu:long_bismuth_bronze_rod',
        'gtceu:long_lead_rod',
        'gtceu:long_iron_rod',
        'gtceu:long_blue_steel_rod',
        'gtceu:long_magnalium_rod',
        'gtceu:long_diamond_lattice_cable_rod',
        'gtceu:long_steel_rod',
        'gtceu:long_osmiridium_rod',
        'gtceu:long_duranium_rod',
        'gtceu:long_black_bronze_rod',
        'gtceu:long_cupronickel_rod',
        'gtceu:long_darmstadtium_rod',
        'gtceu:long_ruridit_rod',
        'gtceu:long_reinforced_delirium_rod',
        'gtceu:long_tungsten_rod',
        'gtceu:long_copper_rod',
        'gtceu:long_rhodium_plated_palladium_rod',
        'gtceu:long_naquadah_alloy_rod',
        'gtceu:long_tin_alloy_rod',
        'gtceu:long_rhodium_rod',
        'gtceu:long_yttrium_barium_cuprate_rod',
        'gtceu:long_tritanium_rod',
        'gtceu:long_stainless_steel_rod',
        'gtceu:long_naquadah_rod',
        'gtceu:long_vanadium_steel_rod',
        'gtceu:long_hsla_steel_rod',
        'gtceu:long_molybdenum_disilicide_rod',
        'gtceu:long_rtm_alloy_rod'
    ]

    longRods.forEach(rodId => {
        let material = rodId.replace('gtceu:long_', '').replace('_rod', '')
        let ingotInput = `#forge:ingots/${material}`

        event.recipes.gtceu.extruder()
            .itemInputs(`${ingotInput}`)
            .itemOutputs(rodId)
            .notConsumable('kubejs:long_rod_extruder')
            .duration(300)
            .EUt(GTValues.VA[GTValues.MV])
    })

    event.recipes.gtceu.extruder()
        .itemInputs('minecraft:diamond')
        .itemOutputs('gtceu:long_diamond_rod')
        .notConsumable('kubejs:long_rod_extruder')
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.bender()
        .itemInputs('gtceu:empty_mold')
        .itemOutputs('kubejs:latgriummold')
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(25)

    event.recipes.gtceu.bender()
        .itemInputs('gtceu:empty_mold')
        .itemOutputs('kubejs:long_rod_extruder')
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(26)

})