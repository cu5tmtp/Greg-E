StartupEvents.registry("item", event => {

    event.create("infinity_lava_cell", "meinfinitycell:infinity_cell").fluidType("minecraft:lava");
    event.create("infinity_oxygen_cell", "meinfinitycell:infinity_cell").fluidType("gtceu:oxygen");
    event.create("infinity_nitrogen_cell", "meinfinitycell:infinity_cell").fluidType("gtceu:nitrogen");
    event.create("infinity_hydrogen_cell", "meinfinitycell:infinity_cell").fluidType("gtceu:hydrogen");
         
})