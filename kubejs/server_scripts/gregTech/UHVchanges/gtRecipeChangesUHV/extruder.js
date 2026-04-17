ServerEvents.recipes(event => {

    event.recipes.gtceu.extruder('getdracoinumboltttt')
        .itemInputs(
            'draconicevolution:draconium_ingot'
        )
        .itemOutputs(
            'gregecore:draconium_cable_ring'
        )
        .notConsumable('gtceu:ring_extruder_mold')
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    event.remove({id: 'gtceu:extruder/extrude_draconium_cable_ingot_to_small_gear' })
    event.remove({id: 'gtceu:alloy_smelter/alloy_smelt_draconium_cable_ingot_to_small_gear' })    
    event.recipes.gtceu.extruder('getdracoinsgear')
        .itemInputs(
            'draconicevolution:draconium_ingot'
        )
        .itemOutputs(
            'gregecore:small_draconium_cable_gear'
        )
        .notConsumable('gtceu:small_gear_extruder_mold')
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    event.recipes.gtceu.extruder('getdracoingear')
        .itemInputs(
            '4x draconicevolution:draconium_ingot'
        )
        .itemOutputs(
            'gregecore:draconium_cable_gear'
        )
        .notConsumable('gtceu:gear_extruder_mold')
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    event.recipes.gtceu.extruder('getdracoinbolt')
        .itemInputs(
            'draconicevolution:draconium_ingot'
        )
        .itemOutputs(
            '8x gregecore:draconium_cable_bolt'
        )
        .notConsumable('gtceu:bolt_extruder_mold')
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    event.recipes.gtceu.extruder('getdracoinsrod')
        .itemInputs(
            'draconicevolution:draconium_ingot'
        )
        .itemOutputs(
            '2x gregecore:draconium_cable_rod'
        )
        .notConsumable('gtceu:rod_extruder_mold')
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    event.recipes.gtceu.lathe('getdracoinsrod2')
        .itemInputs(
            'draconicevolution:draconium_ingot'
        )
        .itemOutputs(
            '2x gregecore:draconium_cable_rod'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    event.recipes.gtceu.lathe('getdracoinround')
        .itemInputs(
            'draconicevolution:draconium_nugget'
        )
        .itemOutputs(
            'gregecore:draconium_cable_round'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

})