M109 S210.000000
;Sliced at: Tue 05-06-2018 10:35:31
;Basic settings: Layer height: 0.25 Walls: 0.25 Fill: 0
;Print time: 10 minutes
;Filament used: 0.363m 1.0g
;Filament cost: None
;M190 S70 ;Uncomment to add your own bed temperature line
;M109 S210 ;Uncomment to add your own temperature line
G21        ;metric values
G90        ;absolute positioning
M83        ;set extruder to relative mode
M107       ;start with the fan off
G28 X0 Y0  ;move X/Y to min endstops
G28 Z0     ;move Z to min endstops
G1 Z15.0 F4200 ;move the platform down 15mm
G92 E0                  ;zero the extruded length
G1 F200 E3              ;extrude 3mm of feed stock
G92 E0                  ;zero the extruded length again
G1 F4200
;Put printing message on LCD screen
M117 Printing...
G0 F4800 X70 Y80
G1 F1800 X100 Y80 E30
G1  X100 Y80 E20
G1 F1800 X100 Y100 E30
G1  X70 Y80 E20
M107
G1 F1800 E362.97161
G0 F4200 X85.750 Y90.750 Z15.000
;End GCode
M104 S0                     ;extruder heater off
M140 S0                     ;heated bed heater off (if you have it)
G91                                    ;relative positioning
G1 E-1 F300                            ;retract the filament a bit before lifting the nozzle, to release some of the pressure
G1 Z+0.5 E-5 X-20 Y-20 F4200 ;move Z up a bit and retract filament even more
G28 X0 Y0                              ;move X/Y to min endstops, so the head is out of the way
M84                         ;steppers off
G90                         ;absolute positioning
;CURA_PROFILE_STRING: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