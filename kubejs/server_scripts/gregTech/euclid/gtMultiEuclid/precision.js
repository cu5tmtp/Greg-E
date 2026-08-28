ServerEvents.recipes((event) => {

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            '2x gtceu:reinforced_kamenium_plate',
            '2x gtceu:long_reinforced_delirium_rod',
            'gtceu:magnetic_samarium_rod',
            '4x gtceu:redrockium_single_wire'
        )
        .itemOutputs(
            'gtceu:uiv_electric_motor'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            'gtceu:reinforced_kamenium_rotor',
            '2x gtceu:long_reinforced_delirium_rod',
            'gtceu:magnetic_samarium_rod',
            '4x gtceu:redsediment_normal_fluid_pipe'
        )
        .itemOutputs(
            'gtceu:uiv_electric_pump'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            'gtceu:uiv_electric_pump',
            'kubejs:euclid/euclid_circuit',
            'kubejs:euclid/euclid_integrated'
        )
        .itemOutputs(
            'gtceu:uiv_fluid_regulator'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            'gtceu:uiv_electric_pump',
            'kubejs:euclid/euclid_circuit',
            'kubejs:euclid/euclid_integrated'
        )
        .itemOutputs(
            'gtceu:uiv_fluid_regulator'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            '2x gtceu:uiv_electric_motor',
            '6x gtceu:grymploxideepoxilidas_plate',
            '2x gtceu:grymploxideepoxilidas_screw',
            '4x gtceu:grymploxideepoxilidas_rod',
            'gtceu:supergrympl_plate'
        )
        .itemOutputs(
            'gtceu:uiv_conveyor_module'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            '2x gtceu:uiv_electric_motor',
            '6x gtceu:grymploxideepoxilidas_plate',
            '2x gtceu:grymploxideepoxilidas_screw',
            '4x gtceu:grymploxideepoxilidas_rod',
            '6x gtceu:stabilizedarboretum_single_wire'
        )
        .itemOutputs(
            'gtceu:uiv_conveyor_module'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(500)

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            'gtceu:uiv_electric_motor',
            '3x gtceu:grymploxideepoxilidas_plate',
            '4x gtceu:grymploxideepoxilidas_rod',
            'gtceu:supergrympl_gear',
            '8x gtceu:stabilizedarboretum_single_wire'
        )
        .itemOutputs(
            'gtceu:uiv_electric_piston'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            '2x gtceu:supergrympl_gear',
            '2x gtceu:uiv_electric_motor',
            'gtceu:uiv_electric_piston',
            '3x kubejs:euclid/euclid_circuit',
            '2x kubejs:euclid/euclid_integrated',
            'kubejs:euclid/euclid_computer'
        )
        .itemOutputs(
            'gtceu:uiv_robot_arm'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            'gtceu:fracturedfossilmaterial_frame',
            'gtceu:uiv_electric_motor',
            'kubejs:euclid/quarrystar',
            'kubejs:euclid/euclid_mainframe',
            '32x gtceu:xynredder_foil',
            '8x gtceu:fracturedfossilmaterial_single_wire'
        )
        .itemOutputs(
            'gtceu:uiv_emitter'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            'gtceu:fracturedfossilmaterial_frame',
            'gtceu:uiv_electric_motor',
            'kubejs:euclid/quarrystar',
            'kubejs:euclid/euclid_mainframe',
            '32x gtceu:xynredder_foil',
            '8x gtceu:fracturedfossilmaterial_single_wire'
        )
        .itemOutputs(
            'gtceu:uiv_emitter'
        )
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            'gtceu:fracturedfossilmaterial_frame',
            'gtceu:uiv_electric_motor',
            'kubejs:euclid/quarrystar',
            'kubejs:euclid/euclid_mainframe',
            '8x gtceu:supergrympl_plate',
            '8x gtceu:fracturedfossilmaterial_single_wire'
        )
        .itemOutputs(
            'gtceu:uiv_sensor'
        )
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            'gtceu:fracturedfossilmaterial_frame',
            '8x gtceu:supergrympl_plate',
            'kubejs:euclid/quarrystar',
            'gtceu:uiv_emitter',
            'kubejs:euclid/euclid_mainframe',
            '32x gtceu:fine_xynredder_wire'
        )
        .itemOutputs(
            'gtceu:uiv_field_generator'
        )
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)

})