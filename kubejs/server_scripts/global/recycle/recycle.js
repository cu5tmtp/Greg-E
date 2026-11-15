ServerEvents.recipes((event) => {

    let manasteelItems = [
        'kubejs:manasteelfoil',
        /*
        'gregecore:manasteel_cable_single_wire',
        'gregecore:manasteel_cable_double_wire',
        'gregecore:manasteel_cable_quadruple_wire',
        'gregecore:manasteel_cable_octal_wire',
        'gregecore:manasteel_cable_hex_wire',
        */
        'gregecore:manasteel_coil'
    ]

    manasteelItems.forEach(item => {
    event.recipes.gtceu.macerator(`manasteel_macerator_${item.split(':')[1]}`)
        .itemInputs(item)
        .itemOutputs('gregecore:manasteel_cable_dust')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
    })

    event.smelting(
        'botania:manasteel_ingot',
        'gregecore:manasteel_cable_dust'
    )


})