ServerEvents.recipes((event) => {

    /*
    event.recipes.gtceu.bender('getdraconiumplate')
        .itemInputs(
            'draconicevolution:draconium_ingot'
        )
        .itemOutputs(
            'kubejs:dplate'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.bender('getdoubledraconiumplate1')
        .itemInputs(
            '2x kubejs:dplate'
        )
        .itemOutputs(
            'kubejs:ddoubleplate'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(2)

    event.recipes.gtceu.bender('getdoubledraconiumplate2')
        .itemInputs(
            '2x draconicevolution:draconium_ingot'
        )
        .itemOutputs(
            'kubejs:ddoubleplate'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(2)
    */

    event.recipes.gtceu.bender('getawdraconiumfoil')
        .itemInputs(
            'draconicevolution:awakened_draconium_ingot'
        )
        .itemOutputs(
            '4x gregecore:awakened_draconium_cable_foil'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(10)

    event.remove({id: 'gtceu:compressor/compress_plate_dust_draconium_cable'})
    event.recipes.gtceu.bender('getdraconiumplate')
        .itemInputs(
            'draconicevolution:draconium_ingot'
        )
        .itemOutputs(
            'gregecore:draconium_cable_plate'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(1)
        
})