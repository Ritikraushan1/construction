"use client"
import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import { FaPlus, FaMinus } from "react-icons/fa";


const packages = {
    "Delhi - NCR": [
        {
            name: "Affordable Luxury Package",
            price: "Rs. D1599 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "LAMINATE FINISH KITCHEN OF MERINO, SKYDECOR, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "BASIC ELECTRICAL, PLUMBING AND CEILINGS",
                    "STRUCTURE DESIGN",
                ],
                Structure: [
                    "TEHRI GOLD, TEHRI MAHASHAKTI, RANA, OR EQUIVALENT",
                    "SHREE, JK LAKSHMI, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALLS OF 9 AND 4 INCHES",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 10.6 FT. (FINISHES DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "INIDA NUMBER 1, JK LAKSHMI OR EQUIVALENT"
                ],
                Electricals: [
                    "FIRE RETARDENT WIRES OF KEI, FINOLEX",
                    "ANCHOR PENTA OR ZIVA, HAVELLS SWITCH OF UPTO RS 50",
                    "WIPRO LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGN",
                    "CCTV CABLE, WIFI CABLE",
                    "AC INTERNAL COPPER PIPE - GODREJ, HAIER",
                ],
                DoorsWindows: [
                    "DOOR FRAME - SAL WOOD 6X3 INCHES WIDTH",
                    "FLUSH DOOR WITH VENEER OF UPTO RS 1700, HARDWARE OF UPTO RS 3500",
                    "3 TRACK UPVC WINDOW OF PROMINANCE OR EQUIVALENT BRAND",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 60",
                    "BATHROOM TILES OF UPTO RS 60",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 80",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 50",
                    "KITCHEN SLAB NANO OR GRANITE OF UPTO RS 150",
                    "MYKLATICRETE, MARMOTILE ECO ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, TIRUPATI",
                    "JAQUAR BASIC FITTINGS OF UPTO RS 25,000",
                    "KITCHEN SINK - SS",
                    "KITCHEN TAP ESCO OF UPTO RS 3000",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1000 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN TRACTOR EMULSION PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS",
                    "BASIC MS GRILLS ON STAIRCASE WITH ENAMEL PAINT",
                    "MS GRILL ON THE BALCONY RAILING WITH ENAMEL PAINT",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                ]
            }
        },
        {
            name: "Luxury Package",
            price: "Rs. D1999 SQ/FT (incl. gst)",
            features: {
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS DETAILED",
                    "STRUCTURE DESIGN",
                    "KITCHEN DESIGN",
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "SHREE, ULTRATECH, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALL OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, HAVELLES, GM SWITCH OF UPTO RS 70",
                    "LEDURE LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV"
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10INCH WITH UPTO CEILING HEIGHT, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2500, HARWARE OF UPTO RS 8000",
                    "SLEEK ALUMINIUM 3 TRACK WINDOW OF FENESTA, KOMMERLING ",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 120",
                    "BATHROOM TILES OF UPTO RS 120",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 120",
                    "ANTI SKID TILES OF UPTO RS 80",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 220",
                    "MAPEI, SIKKA, MARMO S CATEGORY ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - SUPREME, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD FITTINGS OF UPTO RS 40,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 5,000",
                    "TAPS IN WASHING AREA OF UPTO RS 1000",
                    "OVERHEAD TANK OF 2000 LITRE - SUPREME",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN ROYALE PAINT",
                    "EXTERIOR PAINT - ULTIMA PROTEK",
                    "POP PUNNING ON ALL WALLS",
                ],
                Kitchen: [
                    "PU/ ACRYLIC FINISH KITCHEN",
                    "HARDWARE OF HETTICH",
                    "VEGGIE WASHER IN PRIMARY KITCHEN AND MAIN SINK IN WET AREA",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILL ON STAIRCASE WITH DUCO PAINT 2K",
                    "GLASS GRILLS WITH ALUMIMUM HANDLE ON RAILINGS",
                    "TERMITE TREATMENT WITH THE PIPELINE FITTINGS ",
                    "ALUMINIUM/ ACP PROFILE GATE",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "DEDICATED SUPERVISOR",
                    "SECURITY GUARD 24X7",
                ]
            }
        },
        {
            name: "Ultra Luxury Package",
            price: "Rs. D2499 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "ACRYLIC FINISH KITCHEN OF SKYDECOR, GENOA, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D ELEVATION HIGH END",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS, SWITCHES DETAILED DRAWINGS",
                    "STRUCTURE DESIGN AND SLAB DRAWINGS",
                    "KITCHEN DESIGN",
                    "3D WALKTHROUGH"
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "ULTRATECH, DALMIA PPC GRADE 43 AND OPC GRADE 53 FOR SLAB CASTING",
                    "AGGREGATES 10MM AND 20MM",
                    "AVVAL BRICKS OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, GM, LEGRAND SWITCH OF UPTO RS 100",
                    "LEDURE, JAQUAR, TASVA LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV",
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10 INCH WIDTH, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2000, HARWARE OF UPTO RS 5000",
                    "3 TRACK UPVC WINDOW OF KOMMERLING, FENESTA",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 80",
                    "BATHROOM TILES OF UPTO RS 80",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 100",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 60",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 200",
                    "MARMOTILE, MKLATICRETE C2 ADHESIVEE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD BASIC FITTINGS OF UPTO RS 30,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 3500",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1500 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN APCOLITE PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILLS WITH DUCO PAINT ON STAIRCASE",
                    "MS GRILLS WITH DUCO PAINT ON RAILING",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "SHARED SUPROVISOR"
                ]
            }
        }
    ],
    "Ambala": [
        {
            name: "Affordable Luxury Package",
            price: "Rs. A1599 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "LAMINATE FINISH KITCHEN OF MERINO, SKYDECOR, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "BASIC ELECTRICAL, PLUMBING AND CEILINGS",
                    "STRUCTURE DESIGN",
                ],
                Structure: [
                    "TEHRI GOLD, TEHRI MAHASHAKTI, RANA, OR EQUIVALENT",
                    "SHREE, JK LAKSHMI, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALLS OF 9 AND 4 INCHES",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 10.6 FT. (FINISHES DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "INIDA NUMBER 1, JK LAKSHMI OR EQUIVALENT"
                ],
                Electricals: [
                    "FIRE RETARDENT WIRES OF KEI, FINOLEX",
                    "ANCHOR PENTA OR ZIVA, HAVELLS SWITCH OF UPTO RS 50",
                    "WIPRO LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGN",
                    "CCTV CABLE, WIFI CABLE",
                    "AC INTERNAL COPPER PIPE - GODREJ, HAIER",
                ],
                DoorsWindows: [
                    "DOOR FRAME - SAL WOOD 6X3 INCHES WIDTH",
                    "FLUSH DOOR WITH VENEER OF UPTO RS 1700, HARDWARE OF UPTO RS 3500",
                    "3 TRACK UPVC WINDOW OF PROMINANCE OR EQUIVALENT BRAND",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 60",
                    "BATHROOM TILES OF UPTO RS 60",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 80",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 50",
                    "KITCHEN SLAB NANO OR GRANITE OF UPTO RS 150",
                    "MYKLATICRETE, MARMOTILE ECO ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, TIRUPATI",
                    "JAQUAR BASIC FITTINGS OF UPTO RS 25,000",
                    "KITCHEN SINK - SS",
                    "KITCHEN TAP ESCO OF UPTO RS 3000",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1000 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN TRACTOR EMULSION PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS",
                    "BASIC MS GRILLS ON STAIRCASE WITH ENAMEL PAINT",
                    "MS GRILL ON THE BALCONY RAILING WITH ENAMEL PAINT",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                ]
            }
        },
        {
            name: "Luxury Package",
            price: "Rs. A1999 SQ/FT (incl. gst)",
            features: {
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS DETAILED",
                    "STRUCTURE DESIGN",
                    "KITCHEN DESIGN",
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "SHREE, ULTRATECH, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALL OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, HAVELLES, GM SWITCH OF UPTO RS 70",
                    "LEDURE LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV"
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10INCH WITH UPTO CEILING HEIGHT, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2500, HARWARE OF UPTO RS 8000",
                    "SLEEK ALUMINIUM 3 TRACK WINDOW OF FENESTA, KOMMERLING ",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 120",
                    "BATHROOM TILES OF UPTO RS 120",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 120",
                    "ANTI SKID TILES OF UPTO RS 80",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 220",
                    "MAPEI, SIKKA, MARMO S CATEGORY ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - SUPREME, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD FITTINGS OF UPTO RS 40,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 5,000",
                    "TAPS IN WASHING AREA OF UPTO RS 1000",
                    "OVERHEAD TANK OF 2000 LITRE - SUPREME",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN ROYALE PAINT",
                    "EXTERIOR PAINT - ULTIMA PROTEK",
                    "POP PUNNING ON ALL WALLS",
                ],
                Kitchen: [
                    "PU/ ACRYLIC FINISH KITCHEN",
                    "HARDWARE OF HETTICH",
                    "VEGGIE WASHER IN PRIMARY KITCHEN AND MAIN SINK IN WET AREA",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILL ON STAIRCASE WITH DUCO PAINT 2K",
                    "GLASS GRILLS WITH ALUMIMUM HANDLE ON RAILINGS",
                    "TERMITE TREATMENT WITH THE PIPELINE FITTINGS ",
                    "ALUMINIUM/ ACP PROFILE GATE",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "DEDICATED SUPERVISOR",
                    "SECURITY GUARD 24X7",
                ]
            }
        },
        {
            name: "Ultra Luxury Package",
            price: "Rs. A2499 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "ACRYLIC FINISH KITCHEN OF SKYDECOR, GENOA, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D ELEVATION HIGH END",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS, SWITCHES DETAILED DRAWINGS",
                    "STRUCTURE DESIGN AND SLAB DRAWINGS",
                    "KITCHEN DESIGN",
                    "3D WALKTHROUGH"
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "ULTRATECH, DALMIA PPC GRADE 43 AND OPC GRADE 53 FOR SLAB CASTING",
                    "AGGREGATES 10MM AND 20MM",
                    "AVVAL BRICKS OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, GM, LEGRAND SWITCH OF UPTO RS 100",
                    "LEDURE, JAQUAR, TASVA LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV",
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10 INCH WIDTH, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2000, HARWARE OF UPTO RS 5000",
                    "3 TRACK UPVC WINDOW OF KOMMERLING, FENESTA",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 80",
                    "BATHROOM TILES OF UPTO RS 80",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 100",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 60",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 200",
                    "MARMOTILE, MKLATICRETE C2 ADHESIVEE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD BASIC FITTINGS OF UPTO RS 30,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 3500",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1500 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN APCOLITE PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILLS WITH DUCO PAINT ON STAIRCASE",
                    "MS GRILLS WITH DUCO PAINT ON RAILING",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "SHARED SUPROVISOR"
                ]
            }
        }
    ],
    "Chandigarh": [
        {
            name: "Affordable Luxury Package",
            price: "Rs. C1599 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "LAMINATE FINISH KITCHEN OF MERINO, SKYDECOR, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "BASIC ELECTRICAL, PLUMBING AND CEILINGS",
                    "STRUCTURE DESIGN",
                ],
                Structure: [
                    "TEHRI GOLD, TEHRI MAHASHAKTI, RANA, OR EQUIVALENT",
                    "SHREE, JK LAKSHMI, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALLS OF 9 AND 4 INCHES",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 10.6 FT. (FINISHES DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "INIDA NUMBER 1, JK LAKSHMI OR EQUIVALENT"
                ],
                Electricals: [
                    "FIRE RETARDENT WIRES OF KEI, FINOLEX",
                    "ANCHOR PENTA OR ZIVA, HAVELLS SWITCH OF UPTO RS 50",
                    "WIPRO LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGN",
                    "CCTV CABLE, WIFI CABLE",
                    "AC INTERNAL COPPER PIPE - GODREJ, HAIER",
                ],
                DoorsWindows: [
                    "DOOR FRAME - SAL WOOD 6X3 INCHES WIDTH",
                    "FLUSH DOOR WITH VENEER OF UPTO RS 1700, HARDWARE OF UPTO RS 3500",
                    "3 TRACK UPVC WINDOW OF PROMINANCE OR EQUIVALENT BRAND",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 60",
                    "BATHROOM TILES OF UPTO RS 60",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 80",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 50",
                    "KITCHEN SLAB NANO OR GRANITE OF UPTO RS 150",
                    "MYKLATICRETE, MARMOTILE ECO ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, TIRUPATI",
                    "JAQUAR BASIC FITTINGS OF UPTO RS 25,000",
                    "KITCHEN SINK - SS",
                    "KITCHEN TAP ESCO OF UPTO RS 3000",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1000 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN TRACTOR EMULSION PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS",
                    "BASIC MS GRILLS ON STAIRCASE WITH ENAMEL PAINT",
                    "MS GRILL ON THE BALCONY RAILING WITH ENAMEL PAINT",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                ]
            }
        },
        {
            name: "Luxury Package",
            price: "Rs. C1999 SQ/FT (incl. gst)",
            features: {
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS DETAILED",
                    "STRUCTURE DESIGN",
                    "KITCHEN DESIGN",
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "SHREE, ULTRATECH, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALL OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, HAVELLES, GM SWITCH OF UPTO RS 70",
                    "LEDURE LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV"
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10INCH WITH UPTO CEILING HEIGHT, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2500, HARWARE OF UPTO RS 8000",
                    "SLEEK ALUMINIUM 3 TRACK WINDOW OF FENESTA, KOMMERLING ",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 120",
                    "BATHROOM TILES OF UPTO RS 120",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 120",
                    "ANTI SKID TILES OF UPTO RS 80",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 220",
                    "MAPEI, SIKKA, MARMO S CATEGORY ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - SUPREME, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD FITTINGS OF UPTO RS 40,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 5,000",
                    "TAPS IN WASHING AREA OF UPTO RS 1000",
                    "OVERHEAD TANK OF 2000 LITRE - SUPREME",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN ROYALE PAINT",
                    "EXTERIOR PAINT - ULTIMA PROTEK",
                    "POP PUNNING ON ALL WALLS",
                ],
                Kitchen: [
                    "PU/ ACRYLIC FINISH KITCHEN",
                    "HARDWARE OF HETTICH",
                    "VEGGIE WASHER IN PRIMARY KITCHEN AND MAIN SINK IN WET AREA",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILL ON STAIRCASE WITH DUCO PAINT 2K",
                    "GLASS GRILLS WITH ALUMIMUM HANDLE ON RAILINGS",
                    "TERMITE TREATMENT WITH THE PIPELINE FITTINGS ",
                    "ALUMINIUM/ ACP PROFILE GATE",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "DEDICATED SUPERVISOR",
                    "SECURITY GUARD 24X7",
                ]
            }
        },
        {
            name: "Ultra Luxury Package",
            price: "Rs. C2499 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "ACRYLIC FINISH KITCHEN OF SKYDECOR, GENOA, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D ELEVATION HIGH END",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS, SWITCHES DETAILED DRAWINGS",
                    "STRUCTURE DESIGN AND SLAB DRAWINGS",
                    "KITCHEN DESIGN",
                    "3D WALKTHROUGH"
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "ULTRATECH, DALMIA PPC GRADE 43 AND OPC GRADE 53 FOR SLAB CASTING",
                    "AGGREGATES 10MM AND 20MM",
                    "AVVAL BRICKS OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, GM, LEGRAND SWITCH OF UPTO RS 100",
                    "LEDURE, JAQUAR, TASVA LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV",
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10 INCH WIDTH, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2000, HARWARE OF UPTO RS 5000",
                    "3 TRACK UPVC WINDOW OF KOMMERLING, FENESTA",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 80",
                    "BATHROOM TILES OF UPTO RS 80",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 100",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 60",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 200",
                    "MARMOTILE, MKLATICRETE C2 ADHESIVEE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD BASIC FITTINGS OF UPTO RS 30,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 3500",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1500 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN APCOLITE PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILLS WITH DUCO PAINT ON STAIRCASE",
                    "MS GRILLS WITH DUCO PAINT ON RAILING",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "SHARED SUPROVISOR"
                ]
            }
        }
    ],
    "Dehradun": [
        {
            name: "Affordable Luxury Package",
            price: "Rs. D1599 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "LAMINATE FINISH KITCHEN OF MERINO, SKYDECOR, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "BASIC ELECTRICAL, PLUMBING AND CEILINGS",
                    "STRUCTURE DESIGN",
                ],
                Structure: [
                    "TEHRI GOLD, TEHRI MAHASHAKTI, RANA, OR EQUIVALENT",
                    "SHREE, JK LAKSHMI, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALLS OF 9 AND 4 INCHES",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 10.6 FT. (FINISHES DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "INIDA NUMBER 1, JK LAKSHMI OR EQUIVALENT"
                ],
                Electricals: [
                    "FIRE RETARDENT WIRES OF KEI, FINOLEX",
                    "ANCHOR PENTA OR ZIVA, HAVELLS SWITCH OF UPTO RS 50",
                    "WIPRO LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGN",
                    "CCTV CABLE, WIFI CABLE",
                    "AC INTERNAL COPPER PIPE - GODREJ, HAIER",
                ],
                DoorsWindows: [
                    "DOOR FRAME - SAL WOOD 6X3 INCHES WIDTH",
                    "FLUSH DOOR WITH VENEER OF UPTO RS 1700, HARDWARE OF UPTO RS 3500",
                    "3 TRACK UPVC WINDOW OF PROMINANCE OR EQUIVALENT BRAND",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 60",
                    "BATHROOM TILES OF UPTO RS 60",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 80",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 50",
                    "KITCHEN SLAB NANO OR GRANITE OF UPTO RS 150",
                    "MYKLATICRETE, MARMOTILE ECO ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, TIRUPATI",
                    "JAQUAR BASIC FITTINGS OF UPTO RS 25,000",
                    "KITCHEN SINK - SS",
                    "KITCHEN TAP ESCO OF UPTO RS 3000",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1000 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN TRACTOR EMULSION PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS",
                    "BASIC MS GRILLS ON STAIRCASE WITH ENAMEL PAINT",
                    "MS GRILL ON THE BALCONY RAILING WITH ENAMEL PAINT",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                ]
            }
        },
        {
            name: "Luxury Package",
            price: "Rs. D1999 SQ/FT (incl. gst)",
            features: {
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS DETAILED",
                    "STRUCTURE DESIGN",
                    "KITCHEN DESIGN",
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "SHREE, ULTRATECH, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALL OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, HAVELLES, GM SWITCH OF UPTO RS 70",
                    "LEDURE LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV"
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10INCH WITH UPTO CEILING HEIGHT, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2500, HARWARE OF UPTO RS 8000",
                    "SLEEK ALUMINIUM 3 TRACK WINDOW OF FENESTA, KOMMERLING ",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 120",
                    "BATHROOM TILES OF UPTO RS 120",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 120",
                    "ANTI SKID TILES OF UPTO RS 80",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 220",
                    "MAPEI, SIKKA, MARMO S CATEGORY ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - SUPREME, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD FITTINGS OF UPTO RS 40,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 5,000",
                    "TAPS IN WASHING AREA OF UPTO RS 1000",
                    "OVERHEAD TANK OF 2000 LITRE - SUPREME",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN ROYALE PAINT",
                    "EXTERIOR PAINT - ULTIMA PROTEK",
                    "POP PUNNING ON ALL WALLS",
                ],
                Kitchen: [
                    "PU/ ACRYLIC FINISH KITCHEN",
                    "HARDWARE OF HETTICH",
                    "VEGGIE WASHER IN PRIMARY KITCHEN AND MAIN SINK IN WET AREA",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILL ON STAIRCASE WITH DUCO PAINT 2K",
                    "GLASS GRILLS WITH ALUMIMUM HANDLE ON RAILINGS",
                    "TERMITE TREATMENT WITH THE PIPELINE FITTINGS ",
                    "ALUMINIUM/ ACP PROFILE GATE",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "DEDICATED SUPERVISOR",
                    "SECURITY GUARD 24X7",
                ]
            }
        },
        {
            name: "Ultra Luxury Package",
            price: "Rs. D2499 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "ACRYLIC FINISH KITCHEN OF SKYDECOR, GENOA, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D ELEVATION HIGH END",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS, SWITCHES DETAILED DRAWINGS",
                    "STRUCTURE DESIGN AND SLAB DRAWINGS",
                    "KITCHEN DESIGN",
                    "3D WALKTHROUGH"
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "ULTRATECH, DALMIA PPC GRADE 43 AND OPC GRADE 53 FOR SLAB CASTING",
                    "AGGREGATES 10MM AND 20MM",
                    "AVVAL BRICKS OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, GM, LEGRAND SWITCH OF UPTO RS 100",
                    "LEDURE, JAQUAR, TASVA LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV",
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10 INCH WIDTH, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2000, HARWARE OF UPTO RS 5000",
                    "3 TRACK UPVC WINDOW OF KOMMERLING, FENESTA",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 80",
                    "BATHROOM TILES OF UPTO RS 80",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 100",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 60",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 200",
                    "MARMOTILE, MKLATICRETE C2 ADHESIVEE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD BASIC FITTINGS OF UPTO RS 30,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 3500",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1500 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN APCOLITE PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILLS WITH DUCO PAINT ON STAIRCASE",
                    "MS GRILLS WITH DUCO PAINT ON RAILING",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "SHARED SUPROVISOR"
                ]
            }
        }
    ],
    "Karnal": [
        {
            name: "Affordable Luxury Package",
            price: "Rs. K1599 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "LAMINATE FINISH KITCHEN OF MERINO, SKYDECOR, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "BASIC ELECTRICAL, PLUMBING AND CEILINGS",
                    "STRUCTURE DESIGN",
                ],
                Structure: [
                    "TEHRI GOLD, TEHRI MAHASHAKTI, RANA, OR EQUIVALENT",
                    "SHREE, JK LAKSHMI, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALLS OF 9 AND 4 INCHES",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 10.6 FT. (FINISHES DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "INIDA NUMBER 1, JK LAKSHMI OR EQUIVALENT"
                ],
                Electricals: [
                    "FIRE RETARDENT WIRES OF KEI, FINOLEX",
                    "ANCHOR PENTA OR ZIVA, HAVELLS SWITCH OF UPTO RS 50",
                    "WIPRO LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGN",
                    "CCTV CABLE, WIFI CABLE",
                    "AC INTERNAL COPPER PIPE - GODREJ, HAIER",
                ],
                DoorsWindows: [
                    "DOOR FRAME - SAL WOOD 6X3 INCHES WIDTH",
                    "FLUSH DOOR WITH VENEER OF UPTO RS 1700, HARDWARE OF UPTO RS 3500",
                    "3 TRACK UPVC WINDOW OF PROMINANCE OR EQUIVALENT BRAND",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 60",
                    "BATHROOM TILES OF UPTO RS 60",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 80",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 50",
                    "KITCHEN SLAB NANO OR GRANITE OF UPTO RS 150",
                    "MYKLATICRETE, MARMOTILE ECO ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, TIRUPATI",
                    "JAQUAR BASIC FITTINGS OF UPTO RS 25,000",
                    "KITCHEN SINK - SS",
                    "KITCHEN TAP ESCO OF UPTO RS 3000",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1000 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN TRACTOR EMULSION PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS",
                    "BASIC MS GRILLS ON STAIRCASE WITH ENAMEL PAINT",
                    "MS GRILL ON THE BALCONY RAILING WITH ENAMEL PAINT",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                ]
            }
        },
        {
            name: "Luxury Package",
            price: "Rs. K1999 SQ/FT (incl. gst)",
            features: {
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS DETAILED",
                    "STRUCTURE DESIGN",
                    "KITCHEN DESIGN",
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "SHREE, ULTRATECH, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALL OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, HAVELLES, GM SWITCH OF UPTO RS 70",
                    "LEDURE LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV"
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10INCH WITH UPTO CEILING HEIGHT, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2500, HARWARE OF UPTO RS 8000",
                    "SLEEK ALUMINIUM 3 TRACK WINDOW OF FENESTA, KOMMERLING ",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 120",
                    "BATHROOM TILES OF UPTO RS 120",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 120",
                    "ANTI SKID TILES OF UPTO RS 80",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 220",
                    "MAPEI, SIKKA, MARMO S CATEGORY ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - SUPREME, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD FITTINGS OF UPTO RS 40,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 5,000",
                    "TAPS IN WASHING AREA OF UPTO RS 1000",
                    "OVERHEAD TANK OF 2000 LITRE - SUPREME",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN ROYALE PAINT",
                    "EXTERIOR PAINT - ULTIMA PROTEK",
                    "POP PUNNING ON ALL WALLS",
                ],
                Kitchen: [
                    "PU/ ACRYLIC FINISH KITCHEN",
                    "HARDWARE OF HETTICH",
                    "VEGGIE WASHER IN PRIMARY KITCHEN AND MAIN SINK IN WET AREA",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILL ON STAIRCASE WITH DUCO PAINT 2K",
                    "GLASS GRILLS WITH ALUMIMUM HANDLE ON RAILINGS",
                    "TERMITE TREATMENT WITH THE PIPELINE FITTINGS ",
                    "ALUMINIUM/ ACP PROFILE GATE",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "DEDICATED SUPERVISOR",
                    "SECURITY GUARD 24X7",
                ]
            }
        },
        {
            name: "Ultra Luxury Package",
            price: "Rs. K2499 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "ACRYLIC FINISH KITCHEN OF SKYDECOR, GENOA, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D ELEVATION HIGH END",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS, SWITCHES DETAILED DRAWINGS",
                    "STRUCTURE DESIGN AND SLAB DRAWINGS",
                    "KITCHEN DESIGN",
                    "3D WALKTHROUGH"
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "ULTRATECH, DALMIA PPC GRADE 43 AND OPC GRADE 53 FOR SLAB CASTING",
                    "AGGREGATES 10MM AND 20MM",
                    "AVVAL BRICKS OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, GM, LEGRAND SWITCH OF UPTO RS 100",
                    "LEDURE, JAQUAR, TASVA LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV",
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10 INCH WIDTH, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2000, HARWARE OF UPTO RS 5000",
                    "3 TRACK UPVC WINDOW OF KOMMERLING, FENESTA",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 80",
                    "BATHROOM TILES OF UPTO RS 80",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 100",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 60",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 200",
                    "MARMOTILE, MKLATICRETE C2 ADHESIVEE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD BASIC FITTINGS OF UPTO RS 30,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 3500",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1500 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN APCOLITE PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILLS WITH DUCO PAINT ON STAIRCASE",
                    "MS GRILLS WITH DUCO PAINT ON RAILING",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "SHARED SUPROVISOR"
                ]
            }
        }
    ],
    "Saharanpur": [
        {
            name: "Affordable Luxury Package",
            price: "Rs. S1599 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "LAMINATE FINISH KITCHEN OF MERINO, SKYDECOR, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "BASIC ELECTRICAL, PLUMBING AND CEILINGS",
                    "STRUCTURE DESIGN",
                ],
                Structure: [
                    "TEHRI GOLD, TEHRI MAHASHAKTI, RANA, OR EQUIVALENT",
                    "SHREE, JK LAKSHMI, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALLS OF 9 AND 4 INCHES",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 10.6 FT. (FINISHES DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "INIDA NUMBER 1, JK LAKSHMI OR EQUIVALENT"
                ],
                Electricals: [
                    "FIRE RETARDENT WIRES OF KEI, FINOLEX",
                    "ANCHOR PENTA OR ZIVA, HAVELLS SWITCH OF UPTO RS 50",
                    "WIPRO LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGN",
                    "CCTV CABLE, WIFI CABLE",
                    "AC INTERNAL COPPER PIPE - GODREJ, HAIER",
                ],
                DoorsWindows: [
                    "DOOR FRAME - SAL WOOD 6X3 INCHES WIDTH",
                    "FLUSH DOOR WITH VENEER OF UPTO RS 1700, HARDWARE OF UPTO RS 3500",
                    "3 TRACK UPVC WINDOW OF PROMINANCE OR EQUIVALENT BRAND",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 60",
                    "BATHROOM TILES OF UPTO RS 60",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 80",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 50",
                    "KITCHEN SLAB NANO OR GRANITE OF UPTO RS 150",
                    "MYKLATICRETE, MARMOTILE ECO ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, TIRUPATI",
                    "JAQUAR BASIC FITTINGS OF UPTO RS 25,000",
                    "KITCHEN SINK - SS",
                    "KITCHEN TAP ESCO OF UPTO RS 3000",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1000 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN TRACTOR EMULSION PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS",
                    "BASIC MS GRILLS ON STAIRCASE WITH ENAMEL PAINT",
                    "MS GRILL ON THE BALCONY RAILING WITH ENAMEL PAINT",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                ]
            }
        },
        {
            name: "Luxury Package",
            price: "Rs. S1999 SQ/FT (incl. gst)",
            features: {
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS DETAILED",
                    "STRUCTURE DESIGN",
                    "KITCHEN DESIGN",
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "SHREE, ULTRATECH, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALL OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, HAVELLES, GM SWITCH OF UPTO RS 70",
                    "LEDURE LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV"
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10INCH WITH UPTO CEILING HEIGHT, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2500, HARWARE OF UPTO RS 8000",
                    "SLEEK ALUMINIUM 3 TRACK WINDOW OF FENESTA, KOMMERLING ",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 120",
                    "BATHROOM TILES OF UPTO RS 120",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 120",
                    "ANTI SKID TILES OF UPTO RS 80",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 220",
                    "MAPEI, SIKKA, MARMO S CATEGORY ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - SUPREME, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD FITTINGS OF UPTO RS 40,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 5,000",
                    "TAPS IN WASHING AREA OF UPTO RS 1000",
                    "OVERHEAD TANK OF 2000 LITRE - SUPREME",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN ROYALE PAINT",
                    "EXTERIOR PAINT - ULTIMA PROTEK",
                    "POP PUNNING ON ALL WALLS",
                ],
                Kitchen: [
                    "PU/ ACRYLIC FINISH KITCHEN",
                    "HARDWARE OF HETTICH",
                    "VEGGIE WASHER IN PRIMARY KITCHEN AND MAIN SINK IN WET AREA",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILL ON STAIRCASE WITH DUCO PAINT 2K",
                    "GLASS GRILLS WITH ALUMIMUM HANDLE ON RAILINGS",
                    "TERMITE TREATMENT WITH THE PIPELINE FITTINGS ",
                    "ALUMINIUM/ ACP PROFILE GATE",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "DEDICATED SUPERVISOR",
                    "SECURITY GUARD 24X7",
                ]
            }
        },
        {
            name: "Ultra Luxury Package",
            price: "Rs. S2499 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "ACRYLIC FINISH KITCHEN OF SKYDECOR, GENOA, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D ELEVATION HIGH END",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS, SWITCHES DETAILED DRAWINGS",
                    "STRUCTURE DESIGN AND SLAB DRAWINGS",
                    "KITCHEN DESIGN",
                    "3D WALKTHROUGH"
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "ULTRATECH, DALMIA PPC GRADE 43 AND OPC GRADE 53 FOR SLAB CASTING",
                    "AGGREGATES 10MM AND 20MM",
                    "AVVAL BRICKS OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, GM, LEGRAND SWITCH OF UPTO RS 100",
                    "LEDURE, JAQUAR, TASVA LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV",
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10 INCH WIDTH, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2000, HARWARE OF UPTO RS 5000",
                    "3 TRACK UPVC WINDOW OF KOMMERLING, FENESTA",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 80",
                    "BATHROOM TILES OF UPTO RS 80",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 100",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 60",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 200",
                    "MARMOTILE, MKLATICRETE C2 ADHESIVEE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD BASIC FITTINGS OF UPTO RS 30,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 3500",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1500 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN APCOLITE PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILLS WITH DUCO PAINT ON STAIRCASE",
                    "MS GRILLS WITH DUCO PAINT ON RAILING",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "SHARED SUPROVISOR"
                ]
            }
        }
    ],
    "Indore": [
        {
            name: "Affordable Luxury Package",
            price: "Rs. I1599 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "LAMINATE FINISH KITCHEN OF MERINO, SKYDECOR, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "BASIC ELECTRICAL, PLUMBING AND CEILINGS",
                    "STRUCTURE DESIGN",
                ],
                Structure: [
                    "TEHRI GOLD, TEHRI MAHASHAKTI, RANA, OR EQUIVALENT",
                    "SHREE, JK LAKSHMI, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALLS OF 9 AND 4 INCHES",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 10.6 FT. (FINISHES DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "INIDA NUMBER 1, JK LAKSHMI OR EQUIVALENT"
                ],
                Electricals: [
                    "FIRE RETARDENT WIRES OF KEI, FINOLEX",
                    "ANCHOR PENTA OR ZIVA, HAVELLS SWITCH OF UPTO RS 50",
                    "WIPRO LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGN",
                    "CCTV CABLE, WIFI CABLE",
                    "AC INTERNAL COPPER PIPE - GODREJ, HAIER",
                ],
                DoorsWindows: [
                    "DOOR FRAME - SAL WOOD 6X3 INCHES WIDTH",
                    "FLUSH DOOR WITH VENEER OF UPTO RS 1700, HARDWARE OF UPTO RS 3500",
                    "3 TRACK UPVC WINDOW OF PROMINANCE OR EQUIVALENT BRAND",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 60",
                    "BATHROOM TILES OF UPTO RS 60",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 80",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 50",
                    "KITCHEN SLAB NANO OR GRANITE OF UPTO RS 150",
                    "MYKLATICRETE, MARMOTILE ECO ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, TIRUPATI",
                    "JAQUAR BASIC FITTINGS OF UPTO RS 25,000",
                    "KITCHEN SINK - SS",
                    "KITCHEN TAP ESCO OF UPTO RS 3000",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1000 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN TRACTOR EMULSION PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS",
                    "BASIC MS GRILLS ON STAIRCASE WITH ENAMEL PAINT",
                    "MS GRILL ON THE BALCONY RAILING WITH ENAMEL PAINT",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                ]
            }
        },
        {
            name: "Luxury Package",
            price: "Rs. I1999 SQ/FT (incl. gst)",
            features: {
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS DETAILED",
                    "STRUCTURE DESIGN",
                    "KITCHEN DESIGN",
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "SHREE, ULTRATECH, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALL OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, HAVELLES, GM SWITCH OF UPTO RS 70",
                    "LEDURE LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV"
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10INCH WITH UPTO CEILING HEIGHT, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2500, HARWARE OF UPTO RS 8000",
                    "SLEEK ALUMINIUM 3 TRACK WINDOW OF FENESTA, KOMMERLING ",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 120",
                    "BATHROOM TILES OF UPTO RS 120",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 120",
                    "ANTI SKID TILES OF UPTO RS 80",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 220",
                    "MAPEI, SIKKA, MARMO S CATEGORY ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - SUPREME, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD FITTINGS OF UPTO RS 40,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 5,000",
                    "TAPS IN WASHING AREA OF UPTO RS 1000",
                    "OVERHEAD TANK OF 2000 LITRE - SUPREME",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN ROYALE PAINT",
                    "EXTERIOR PAINT - ULTIMA PROTEK",
                    "POP PUNNING ON ALL WALLS",
                ],
                Kitchen: [
                    "PU/ ACRYLIC FINISH KITCHEN",
                    "HARDWARE OF HETTICH",
                    "VEGGIE WASHER IN PRIMARY KITCHEN AND MAIN SINK IN WET AREA",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILL ON STAIRCASE WITH DUCO PAINT 2K",
                    "GLASS GRILLS WITH ALUMIMUM HANDLE ON RAILINGS",
                    "TERMITE TREATMENT WITH THE PIPELINE FITTINGS ",
                    "ALUMINIUM/ ACP PROFILE GATE",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "DEDICATED SUPERVISOR",
                    "SECURITY GUARD 24X7",
                ]
            }
        },
        {
            name: "Ultra Luxury Package",
            price: "Rs. I2499 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "ACRYLIC FINISH KITCHEN OF SKYDECOR, GENOA, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D ELEVATION HIGH END",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS, SWITCHES DETAILED DRAWINGS",
                    "STRUCTURE DESIGN AND SLAB DRAWINGS",
                    "KITCHEN DESIGN",
                    "3D WALKTHROUGH"
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "ULTRATECH, DALMIA PPC GRADE 43 AND OPC GRADE 53 FOR SLAB CASTING",
                    "AGGREGATES 10MM AND 20MM",
                    "AVVAL BRICKS OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, GM, LEGRAND SWITCH OF UPTO RS 100",
                    "LEDURE, JAQUAR, TASVA LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV",
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10 INCH WIDTH, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2000, HARWARE OF UPTO RS 5000",
                    "3 TRACK UPVC WINDOW OF KOMMERLING, FENESTA",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 80",
                    "BATHROOM TILES OF UPTO RS 80",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 100",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 60",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 200",
                    "MARMOTILE, MKLATICRETE C2 ADHESIVEE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD BASIC FITTINGS OF UPTO RS 30,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 3500",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1500 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN APCOLITE PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILLS WITH DUCO PAINT ON STAIRCASE",
                    "MS GRILLS WITH DUCO PAINT ON RAILING",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "SHARED SUPROVISOR"
                ]
            }
        }
    ],
    "Meerut": [
        {
            name: "Affordable Luxury Package",
            price: "Rs. M1599 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "LAMINATE FINISH KITCHEN OF MERINO, SKYDECOR, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "BASIC ELECTRICAL, PLUMBING AND CEILINGS",
                    "STRUCTURE DESIGN",
                ],
                Structure: [
                    "TEHRI GOLD, TEHRI MAHASHAKTI, RANA, OR EQUIVALENT",
                    "SHREE, JK LAKSHMI, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALLS OF 9 AND 4 INCHES",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 10.6 FT. (FINISHES DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "INIDA NUMBER 1, JK LAKSHMI OR EQUIVALENT"
                ],
                Electricals: [
                    "FIRE RETARDENT WIRES OF KEI, FINOLEX",
                    "ANCHOR PENTA OR ZIVA, HAVELLS SWITCH OF UPTO RS 50",
                    "WIPRO LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGN",
                    "CCTV CABLE, WIFI CABLE",
                    "AC INTERNAL COPPER PIPE - GODREJ, HAIER",
                ],
                DoorsWindows: [
                    "DOOR FRAME - SAL WOOD 6X3 INCHES WIDTH",
                    "FLUSH DOOR WITH VENEER OF UPTO RS 1700, HARDWARE OF UPTO RS 3500",
                    "3 TRACK UPVC WINDOW OF PROMINANCE OR EQUIVALENT BRAND",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 60",
                    "BATHROOM TILES OF UPTO RS 60",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 80",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 50",
                    "KITCHEN SLAB NANO OR GRANITE OF UPTO RS 150",
                    "MYKLATICRETE, MARMOTILE ECO ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, TIRUPATI",
                    "JAQUAR BASIC FITTINGS OF UPTO RS 25,000",
                    "KITCHEN SINK - SS",
                    "KITCHEN TAP ESCO OF UPTO RS 3000",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1000 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN TRACTOR EMULSION PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS",
                    "BASIC MS GRILLS ON STAIRCASE WITH ENAMEL PAINT",
                    "MS GRILL ON THE BALCONY RAILING WITH ENAMEL PAINT",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                ]
            }
        },
        {
            name: "Luxury Package",
            price: "Rs. M1999 SQ/FT (incl. gst)",
            features: {
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS DETAILED",
                    "STRUCTURE DESIGN",
                    "KITCHEN DESIGN",
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "SHREE, ULTRATECH, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALL OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, HAVELLES, GM SWITCH OF UPTO RS 70",
                    "LEDURE LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV"
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10INCH WITH UPTO CEILING HEIGHT, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2500, HARWARE OF UPTO RS 8000",
                    "SLEEK ALUMINIUM 3 TRACK WINDOW OF FENESTA, KOMMERLING ",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 120",
                    "BATHROOM TILES OF UPTO RS 120",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 120",
                    "ANTI SKID TILES OF UPTO RS 80",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 220",
                    "MAPEI, SIKKA, MARMO S CATEGORY ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - SUPREME, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD FITTINGS OF UPTO RS 40,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 5,000",
                    "TAPS IN WASHING AREA OF UPTO RS 1000",
                    "OVERHEAD TANK OF 2000 LITRE - SUPREME",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN ROYALE PAINT",
                    "EXTERIOR PAINT - ULTIMA PROTEK",
                    "POP PUNNING ON ALL WALLS",
                ],
                Kitchen: [
                    "PU/ ACRYLIC FINISH KITCHEN",
                    "HARDWARE OF HETTICH",
                    "VEGGIE WASHER IN PRIMARY KITCHEN AND MAIN SINK IN WET AREA",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILL ON STAIRCASE WITH DUCO PAINT 2K",
                    "GLASS GRILLS WITH ALUMIMUM HANDLE ON RAILINGS",
                    "TERMITE TREATMENT WITH THE PIPELINE FITTINGS ",
                    "ALUMINIUM/ ACP PROFILE GATE",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "DEDICATED SUPERVISOR",
                    "SECURITY GUARD 24X7",
                ]
            }
        },
        {
            name: "Ultra Luxury Package",
            price: "Rs. M2499 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "ACRYLIC FINISH KITCHEN OF SKYDECOR, GENOA, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D ELEVATION HIGH END",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS, SWITCHES DETAILED DRAWINGS",
                    "STRUCTURE DESIGN AND SLAB DRAWINGS",
                    "KITCHEN DESIGN",
                    "3D WALKTHROUGH"
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "ULTRATECH, DALMIA PPC GRADE 43 AND OPC GRADE 53 FOR SLAB CASTING",
                    "AGGREGATES 10MM AND 20MM",
                    "AVVAL BRICKS OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, GM, LEGRAND SWITCH OF UPTO RS 100",
                    "LEDURE, JAQUAR, TASVA LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV",
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10 INCH WIDTH, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2000, HARWARE OF UPTO RS 5000",
                    "3 TRACK UPVC WINDOW OF KOMMERLING, FENESTA",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 80",
                    "BATHROOM TILES OF UPTO RS 80",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 100",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 60",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 200",
                    "MARMOTILE, MKLATICRETE C2 ADHESIVEE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD BASIC FITTINGS OF UPTO RS 30,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 3500",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1500 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN APCOLITE PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILLS WITH DUCO PAINT ON STAIRCASE",
                    "MS GRILLS WITH DUCO PAINT ON RAILING",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "SHARED SUPROVISOR"
                ]
            }
        }
    ],
    "Muzaffarnagar": [
        {
            name: "Affordable Luxury Package",
            price: "Rs. MU1599 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "LAMINATE FINISH KITCHEN OF MERINO, SKYDECOR, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "BASIC ELECTRICAL, PLUMBING AND CEILINGS",
                    "STRUCTURE DESIGN",
                ],
                Structure: [
                    "TEHRI GOLD, TEHRI MAHASHAKTI, RANA, OR EQUIVALENT",
                    "SHREE, JK LAKSHMI, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALLS OF 9 AND 4 INCHES",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 10.6 FT. (FINISHES DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "INIDA NUMBER 1, JK LAKSHMI OR EQUIVALENT"
                ],
                Electricals: [
                    "FIRE RETARDENT WIRES OF KEI, FINOLEX",
                    "ANCHOR PENTA OR ZIVA, HAVELLS SWITCH OF UPTO RS 50",
                    "WIPRO LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGN",
                    "CCTV CABLE, WIFI CABLE",
                    "AC INTERNAL COPPER PIPE - GODREJ, HAIER",
                ],
                DoorsWindows: [
                    "DOOR FRAME - SAL WOOD 6X3 INCHES WIDTH",
                    "FLUSH DOOR WITH VENEER OF UPTO RS 1700, HARDWARE OF UPTO RS 3500",
                    "3 TRACK UPVC WINDOW OF PROMINANCE OR EQUIVALENT BRAND",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 60",
                    "BATHROOM TILES OF UPTO RS 60",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 80",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 50",
                    "KITCHEN SLAB NANO OR GRANITE OF UPTO RS 150",
                    "MYKLATICRETE, MARMOTILE ECO ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, TIRUPATI",
                    "JAQUAR BASIC FITTINGS OF UPTO RS 25,000",
                    "KITCHEN SINK - SS",
                    "KITCHEN TAP ESCO OF UPTO RS 3000",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1000 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN TRACTOR EMULSION PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS",
                    "BASIC MS GRILLS ON STAIRCASE WITH ENAMEL PAINT",
                    "MS GRILL ON THE BALCONY RAILING WITH ENAMEL PAINT",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                ]
            }
        },
        {
            name: "Luxury Package",
            price: "Rs. MU1999 SQ/FT (incl. gst)",
            features: {
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS DETAILED",
                    "STRUCTURE DESIGN",
                    "KITCHEN DESIGN",
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "SHREE, ULTRATECH, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALL OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, HAVELLES, GM SWITCH OF UPTO RS 70",
                    "LEDURE LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV"
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10INCH WITH UPTO CEILING HEIGHT, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2500, HARWARE OF UPTO RS 8000",
                    "SLEEK ALUMINIUM 3 TRACK WINDOW OF FENESTA, KOMMERLING ",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 120",
                    "BATHROOM TILES OF UPTO RS 120",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 120",
                    "ANTI SKID TILES OF UPTO RS 80",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 220",
                    "MAPEI, SIKKA, MARMO S CATEGORY ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - SUPREME, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD FITTINGS OF UPTO RS 40,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 5,000",
                    "TAPS IN WASHING AREA OF UPTO RS 1000",
                    "OVERHEAD TANK OF 2000 LITRE - SUPREME",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN ROYALE PAINT",
                    "EXTERIOR PAINT - ULTIMA PROTEK",
                    "POP PUNNING ON ALL WALLS",
                ],
                Kitchen: [
                    "PU/ ACRYLIC FINISH KITCHEN",
                    "HARDWARE OF HETTICH",
                    "VEGGIE WASHER IN PRIMARY KITCHEN AND MAIN SINK IN WET AREA",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILL ON STAIRCASE WITH DUCO PAINT 2K",
                    "GLASS GRILLS WITH ALUMIMUM HANDLE ON RAILINGS",
                    "TERMITE TREATMENT WITH THE PIPELINE FITTINGS ",
                    "ALUMINIUM/ ACP PROFILE GATE",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "DEDICATED SUPERVISOR",
                    "SECURITY GUARD 24X7",
                ]
            }
        },
        {
            name: "Ultra Luxury Package",
            price: "Rs. MU2499 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "ACRYLIC FINISH KITCHEN OF SKYDECOR, GENOA, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D ELEVATION HIGH END",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS, SWITCHES DETAILED DRAWINGS",
                    "STRUCTURE DESIGN AND SLAB DRAWINGS",
                    "KITCHEN DESIGN",
                    "3D WALKTHROUGH"
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "ULTRATECH, DALMIA PPC GRADE 43 AND OPC GRADE 53 FOR SLAB CASTING",
                    "AGGREGATES 10MM AND 20MM",
                    "AVVAL BRICKS OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, GM, LEGRAND SWITCH OF UPTO RS 100",
                    "LEDURE, JAQUAR, TASVA LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV",
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10 INCH WIDTH, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2000, HARWARE OF UPTO RS 5000",
                    "3 TRACK UPVC WINDOW OF KOMMERLING, FENESTA",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 80",
                    "BATHROOM TILES OF UPTO RS 80",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 100",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 60",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 200",
                    "MARMOTILE, MKLATICRETE C2 ADHESIVEE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD BASIC FITTINGS OF UPTO RS 30,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 3500",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1500 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN APCOLITE PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILLS WITH DUCO PAINT ON STAIRCASE",
                    "MS GRILLS WITH DUCO PAINT ON RAILING",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "SHARED SUPROVISOR"
                ]
            }
        }
    ],
    "Roorkee": [
        {
            name: "Affordable Luxury Package",
            price: "Rs. R1599 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "LAMINATE FINISH KITCHEN OF MERINO, SKYDECOR, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "BASIC ELECTRICAL, PLUMBING AND CEILINGS",
                    "STRUCTURE DESIGN",
                ],
                Structure: [
                    "TEHRI GOLD, TEHRI MAHASHAKTI, RANA, OR EQUIVALENT",
                    "SHREE, JK LAKSHMI, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALLS OF 9 AND 4 INCHES",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 10.6 FT. (FINISHES DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "INIDA NUMBER 1, JK LAKSHMI OR EQUIVALENT"
                ],
                Electricals: [
                    "FIRE RETARDENT WIRES OF KEI, FINOLEX",
                    "ANCHOR PENTA OR ZIVA, HAVELLS SWITCH OF UPTO RS 50",
                    "WIPRO LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGN",
                    "CCTV CABLE, WIFI CABLE",
                    "AC INTERNAL COPPER PIPE - GODREJ, HAIER",
                ],
                DoorsWindows: [
                    "DOOR FRAME - SAL WOOD 6X3 INCHES WIDTH",
                    "FLUSH DOOR WITH VENEER OF UPTO RS 1700, HARDWARE OF UPTO RS 3500",
                    "3 TRACK UPVC WINDOW OF PROMINANCE OR EQUIVALENT BRAND",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 60",
                    "BATHROOM TILES OF UPTO RS 60",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 80",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 50",
                    "KITCHEN SLAB NANO OR GRANITE OF UPTO RS 150",
                    "MYKLATICRETE, MARMOTILE ECO ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, TIRUPATI",
                    "JAQUAR BASIC FITTINGS OF UPTO RS 25,000",
                    "KITCHEN SINK - SS",
                    "KITCHEN TAP ESCO OF UPTO RS 3000",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1000 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN TRACTOR EMULSION PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS",
                    "BASIC MS GRILLS ON STAIRCASE WITH ENAMEL PAINT",
                    "MS GRILL ON THE BALCONY RAILING WITH ENAMEL PAINT",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                ]
            }
        },
        {
            name: "Luxury Package",
            price: "Rs. R1999 SQ/FT (incl. gst)",
            features: {
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS DETAILED",
                    "STRUCTURE DESIGN",
                    "KITCHEN DESIGN",
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "SHREE, ULTRATECH, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALL OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, HAVELLES, GM SWITCH OF UPTO RS 70",
                    "LEDURE LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV"
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10INCH WITH UPTO CEILING HEIGHT, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2500, HARWARE OF UPTO RS 8000",
                    "SLEEK ALUMINIUM 3 TRACK WINDOW OF FENESTA, KOMMERLING ",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 120",
                    "BATHROOM TILES OF UPTO RS 120",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 120",
                    "ANTI SKID TILES OF UPTO RS 80",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 220",
                    "MAPEI, SIKKA, MARMO S CATEGORY ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - SUPREME, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD FITTINGS OF UPTO RS 40,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 5,000",
                    "TAPS IN WASHING AREA OF UPTO RS 1000",
                    "OVERHEAD TANK OF 2000 LITRE - SUPREME",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN ROYALE PAINT",
                    "EXTERIOR PAINT - ULTIMA PROTEK",
                    "POP PUNNING ON ALL WALLS",
                ],
                Kitchen: [
                    "PU/ ACRYLIC FINISH KITCHEN",
                    "HARDWARE OF HETTICH",
                    "VEGGIE WASHER IN PRIMARY KITCHEN AND MAIN SINK IN WET AREA",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILL ON STAIRCASE WITH DUCO PAINT 2K",
                    "GLASS GRILLS WITH ALUMIMUM HANDLE ON RAILINGS",
                    "TERMITE TREATMENT WITH THE PIPELINE FITTINGS ",
                    "ALUMINIUM/ ACP PROFILE GATE",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "DEDICATED SUPERVISOR",
                    "SECURITY GUARD 24X7",
                ]
            }
        },
        {
            name: "Ultra Luxury Package",
            price: "Rs. R2499 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "ACRYLIC FINISH KITCHEN OF SKYDECOR, GENOA, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D ELEVATION HIGH END",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS, SWITCHES DETAILED DRAWINGS",
                    "STRUCTURE DESIGN AND SLAB DRAWINGS",
                    "KITCHEN DESIGN",
                    "3D WALKTHROUGH"
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "ULTRATECH, DALMIA PPC GRADE 43 AND OPC GRADE 53 FOR SLAB CASTING",
                    "AGGREGATES 10MM AND 20MM",
                    "AVVAL BRICKS OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, GM, LEGRAND SWITCH OF UPTO RS 100",
                    "LEDURE, JAQUAR, TASVA LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV",
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10 INCH WIDTH, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2000, HARWARE OF UPTO RS 5000",
                    "3 TRACK UPVC WINDOW OF KOMMERLING, FENESTA",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 80",
                    "BATHROOM TILES OF UPTO RS 80",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 100",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 60",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 200",
                    "MARMOTILE, MKLATICRETE C2 ADHESIVEE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD BASIC FITTINGS OF UPTO RS 30,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 3500",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1500 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN APCOLITE PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILLS WITH DUCO PAINT ON STAIRCASE",
                    "MS GRILLS WITH DUCO PAINT ON RAILING",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "SHARED SUPROVISOR"
                ]
            }
        }
    ],
    "Yamunanagar": [
        {
            name: "Affordable Luxury Package",
            price: "Rs. Y1599 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "LAMINATE FINISH KITCHEN OF MERINO, SKYDECOR, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "BASIC ELECTRICAL, PLUMBING AND CEILINGS",
                    "STRUCTURE DESIGN",
                ],
                Structure: [
                    "TEHRI GOLD, TEHRI MAHASHAKTI, RANA, OR EQUIVALENT",
                    "SHREE, JK LAKSHMI, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALLS OF 9 AND 4 INCHES",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 10.6 FT. (FINISHES DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "INIDA NUMBER 1, JK LAKSHMI OR EQUIVALENT"
                ],
                Electricals: [
                    "FIRE RETARDENT WIRES OF KEI, FINOLEX",
                    "ANCHOR PENTA OR ZIVA, HAVELLS SWITCH OF UPTO RS 50",
                    "WIPRO LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGN",
                    "CCTV CABLE, WIFI CABLE",
                    "AC INTERNAL COPPER PIPE - GODREJ, HAIER",
                ],
                DoorsWindows: [
                    "DOOR FRAME - SAL WOOD 6X3 INCHES WIDTH",
                    "FLUSH DOOR WITH VENEER OF UPTO RS 1700, HARDWARE OF UPTO RS 3500",
                    "3 TRACK UPVC WINDOW OF PROMINANCE OR EQUIVALENT BRAND",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 60",
                    "BATHROOM TILES OF UPTO RS 60",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 80",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 50",
                    "KITCHEN SLAB NANO OR GRANITE OF UPTO RS 150",
                    "MYKLATICRETE, MARMOTILE ECO ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, TIRUPATI",
                    "JAQUAR BASIC FITTINGS OF UPTO RS 25,000",
                    "KITCHEN SINK - SS",
                    "KITCHEN TAP ESCO OF UPTO RS 3000",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1000 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN TRACTOR EMULSION PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS",
                    "BASIC MS GRILLS ON STAIRCASE WITH ENAMEL PAINT",
                    "MS GRILL ON THE BALCONY RAILING WITH ENAMEL PAINT",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                ]
            }
        },
        {
            name: "Luxury Package",
            price: "Rs. Y1999 SQ/FT (incl. gst)",
            features: {
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D BASIC ELEVATION",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS DETAILED",
                    "STRUCTURE DESIGN",
                    "KITCHEN DESIGN",
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "SHREE, ULTRATECH, PPC GRADE 43 OR EQUIVALENT",
                    "AGGREGATES 10 MM AND 20 MM",
                    "AVVAL BRICKS, WALL OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, HAVELLES, GM SWITCH OF UPTO RS 70",
                    "LEDURE LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV"
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10INCH WITH UPTO CEILING HEIGHT, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2500, HARWARE OF UPTO RS 8000",
                    "SLEEK ALUMINIUM 3 TRACK WINDOW OF FENESTA, KOMMERLING ",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 120",
                    "BATHROOM TILES OF UPTO RS 120",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 120",
                    "ANTI SKID TILES OF UPTO RS 80",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 220",
                    "MAPEI, SIKKA, MARMO S CATEGORY ADHESIVE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - SUPREME, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD FITTINGS OF UPTO RS 40,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 5,000",
                    "TAPS IN WASHING AREA OF UPTO RS 1000",
                    "OVERHEAD TANK OF 2000 LITRE - SUPREME",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN ROYALE PAINT",
                    "EXTERIOR PAINT - ULTIMA PROTEK",
                    "POP PUNNING ON ALL WALLS",
                ],
                Kitchen: [
                    "PU/ ACRYLIC FINISH KITCHEN",
                    "HARDWARE OF HETTICH",
                    "VEGGIE WASHER IN PRIMARY KITCHEN AND MAIN SINK IN WET AREA",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILL ON STAIRCASE WITH DUCO PAINT 2K",
                    "GLASS GRILLS WITH ALUMIMUM HANDLE ON RAILINGS",
                    "TERMITE TREATMENT WITH THE PIPELINE FITTINGS ",
                    "ALUMINIUM/ ACP PROFILE GATE",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "DEDICATED SUPERVISOR",
                    "SECURITY GUARD 24X7",
                ]
            }
        },
        {
            name: "Ultra Luxury Package",
            price: "Rs. Y2499 SQ/FT (incl. gst)",
            features: {
                Kitchen: [
                    "ACRYLIC FINISH KITCHEN OF SKYDECOR, GENOA, VIRGO",
                    "HARWARE OF ROOT, INOX OR EQUIVALENT",
                ],
                Designing: [
                    "ARCHITECTURE 2D PLAN",
                    "3D ELEVATION HIGH END",
                    "ELECTRICALS, PLUMBING, CEILINGS, LIGHTNINGS, SWITCHES DETAILED DRAWINGS",
                    "STRUCTURE DESIGN AND SLAB DRAWINGS",
                    "KITCHEN DESIGN",
                    "3D WALKTHROUGH"
                ],
                Structure: [
                    "TATA, SAIL OR EQUIVALENT STEEL",
                    "ULTRATECH, DALMIA PPC GRADE 43 AND OPC GRADE 53 FOR SLAB CASTING",
                    "AGGREGATES 10MM AND 20MM",
                    "AVVAL BRICKS OF 9 INCH AND 4 INCH",
                    "RCC STRUCTURE AS PER REQUIREMENTS",
                    "SLAB HEIGHT 11 FT.(FINISHED DOOR TO CEILING HEIGHT)",
                    "PCC BASE ON FLOOR",
                ],
                FalseCeiling: [
                    "POP FALSE CEILING",
                    "SAKARNI OR EQUIVALENT BRAND"
                ],
                Electricals: [
                    "FIRE RETARDENT LOW SMOKE WIRES OF HAVELLES, POLYCAB",
                    "NORISYS, GM, LEGRAND SWITCH OF UPTO RS 100",
                    "LEDURE, JAQUAR, TASVA LIGHTNING - COB 9 WATT AND PANEL 12 WATT AS PER CEILING DESIGNS",
                    "CCTV CABLE, WIFI CABLE, EARTHING CABLE, UNDERGROUND CHEMICAL EARTHING",
                    "AC INTERNAL COPPER PIPE - TOTALINE, NAAMDEV",
                ],
                DoorsWindows: [
                    "MAIN DOOR FRAME - 10 INCH WIDTH, INNER DOOR FRAMES OF 6X3 INCH",
                    "WATERPROOF FLUSH DOOR WITH VENEER OF UPTO RS 2000, HARWARE OF UPTO RS 5000",
                    "3 TRACK UPVC WINDOW OF KOMMERLING, FENESTA",
                ],
                Flooring: [
                    "FLOOR TILES OF UPTO RS 80",
                    "BATHROOM TILES OF UPTO RS 80",
                    "GRANITE IN PORCH AND STAIRCASE OF UPTO RS 100",
                    "ANTI SKID TILES IN BALCONY OF UPTO RS 60",
                    "FULL BODY KITCHEN SLAB OF UPTO RS 200",
                    "MARMOTILE, MKLATICRETE C2 ADHESIVEE",
                ],
                SanitaryWare: [
                    "PVC AND CPVC - PRINCE, ASTRAL",
                    "JAQUAR, AMERICAN STANDARD BASIC FITTINGS OF UPTO RS 30,000",
                    "KITCHEN SINK - QUARTZ",
                    "KITCHEN TAP OF UPTO RS 3500",
                    "TAPS IN WASHING AREA OF UPTO RS 800",
                    "OVERHEAD TANK OF 1500 LITRE - HIMGIRI, GANGA",
                ],
                Painting: [
                    "INTERIOR - JK, BIRLA PUTTY AND PRIMER, ASIAN APCOLITE PAINT",
                    "EXTERIOR - ASIAN APEX",
                ],
                Miscellaneous: [
                    "WATERPROOFING OF DR. FIXIT IN BATHROOMS, KITCHEN AND BALCONY",
                    "MS GRILLS WITH DUCO PAINT ON STAIRCASE",
                    "MS GRILLS WITH DUCO PAINT ON RAILING",
                    "TERMITE TREATMENT WITH MEDICINE IN FOUNDATION AND TERRACE",
                    "BASIC MS GATES",
                ],
                Facilities: [
                    "CCTV SURVELLIENCE",
                    "SHARED SUPROVISOR"
                ]
            }
        }
    ]
}

export default function Package() {
    const [location, setLocation] = useState(Cookies.get("location") || "Select Location");
    const [openSections, setOpenSections] = useState({
        Designing: false,
        Structure: false,
        FalseCeiling: false,
        Electricals: false,
        DoorsWindows: false,
        Flooring: false,
        SanitaryWare: false,
        Painting: false,
        Kitchen: false,
        Miscellaneous: false,
        Facilities: false,
    });


    const toggleSection = (sectionName) => {
        setOpenSections((prev) => {
            const newState = Object.keys(prev).reduce((acc, key) => {
                acc[key] = key === sectionName ? !prev[key] : false;
                return acc;
            }, {});
            return newState;
        });
    };

    useEffect(() => {
        Cookies.set("location", location);
    }, [location]);
    const currentPackages = packages[location] || [];
    console.log("Current Location:", location);

    console.log(currentPackages);

    return (
        <div>
            <div className="w-screen h-full lg:h-screen pb-12 bg-slate-200 pt-0 lg:pt-10">
                <div className="">
                    <h1 className=' text-2xl lg:text-4xl font-bold text-black font-rufina text-center'>Packages</h1>
                    <p className=' text-black text-sm lg:text-xl leading-7 pt-3 font-dmsans mx-7 lg:mx-0 text-center'>Find the best home construction packages.*</p>
                    <div className='text-black text-sm lg:text-xl pt-3 flex flex-row items-center justify-center text-center'>
                        <p className=' mr-3'>Currently Showing for</p>
                        <select
                            className=" font-semibold bg-slate-200 outline-none text-yellow-600"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="">Select Location</option>
                            <option value="Ambala">Ambala</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Dehradun">Dehradun</option>
                            <option value="Karnal">Karnal</option>
                            <option value="Saharanpur">Saharanpur</option>
                            <option value="Delhi - NCR">Delhi - NCR</option>
                            <option value="Indore">Indore</option>
                            <option value="Meerut">Meerut</option>
                            <option value="Muzaffarnagar">Muzaffarnagar</option>
                            <option value="Roorkee">Roorkee</option>
                            <option value="Yamunanagar">Yamunanagar</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-5 mx-5 lg:mx-20">
                    {Array.isArray(currentPackages) && currentPackages.length > 0 ? (
                        currentPackages.map((pkg) => (
                            <div key={pkg.name} className="text-black">
                                <div className="">
                                    <div className="h-fit items-center font-rufina justify-center bg-yellow-400 text-center py-3 flex flex-row text-sm gap-2 font-bold">
                                        <p>{pkg.name} - </p>
                                        <p>{pkg.price}</p>
                                    </div>
                                    <div className=" bg-white">
                                        <div className="flex flex-row mx-10 py-3 font-semibold border-b-[1px] border-black border-opacity-40">
                                            <button className='font-dmsans flex flex-row items-center justify-between w-full' onClick={() => toggleSection('Designing')}>
                                                <p className=' font-bold'>Designing</p>
                                                {openSections['Designing'] ? <FaMinus /> : <FaPlus />}
                                            </button>
                                        </div>
                                        {openSections['Designing'] && (
                                            <ul className="mx-10 py-3">
                                                <ul>
                                                    {pkg.features['Designing'].map((feature, index) => (
                                                        <li key={index} className="py-1">{feature}</li>
                                                    ))}
                                                </ul>
                                            </ul>
                                        )}
                                    </div>
                                    <div className=" bg-white">
                                        <div className="flex flex-row mx-10 py-3 font-semibold border-b-[1px] border-black border-opacity-40">
                                            <button className='font-dmsans flex flex-row items-center justify-between w-full' onClick={() => toggleSection('Structure')}>
                                                <p className=' font-bold'>Structure</p>
                                                {openSections['Structure'] ? <FaMinus /> : <FaPlus />}
                                            </button>
                                        </div>
                                        {openSections['Structure'] && (
                                            <ul className="mx-10 py-3">
                                                <ul>
                                                    {pkg.features.Structure.map((feature, index) => (
                                                        <li key={index} className="py-1">{feature}</li>
                                                    ))}
                                                </ul>
                                            </ul>
                                        )}
                                    </div>
                                    <div className=" bg-white">
                                        <div className="flex flex-row mx-10 py-3 font-semibold border-b-[1px] border-black border-opacity-40">
                                            <button className='font-dmsans flex flex-row items-center justify-between w-full' onClick={() => toggleSection('FalseCeiling')}>
                                                <p className=' font-bold'>False Ceiling</p>
                                                {openSections['FalseCeiling'] ? <FaMinus /> : <FaPlus />}
                                            </button>
                                        </div>
                                        {openSections['FalseCeiling'] && (
                                            <ul className="mx-10 py-3">
                                                <ul>
                                                    {pkg.features.FalseCeiling.map((feature, index) => (
                                                        <li key={index} className="py-1">{feature}</li>
                                                    ))}
                                                </ul>
                                            </ul>
                                        )}
                                    </div>
                                    <div className=" bg-white">
                                        <div className="flex flex-row mx-10 py-3 font-semibold border-b-[1px] border-black border-opacity-40">
                                            <button className='font-dmsans flex flex-row items-center justify-between w-full' onClick={() => toggleSection('Electricals')}>
                                                <p className=' font-bold'>Electricals</p>
                                                {openSections['Electricals'] ? <FaMinus /> : <FaPlus />}
                                            </button>
                                        </div>
                                        {openSections['Electricals'] && (
                                            <ul className="mx-10 py-3">
                                                <ul>
                                                    {pkg.features.Electricals.map((feature, index) => (
                                                        <li key={index} className="py-1">{feature}</li>
                                                    ))}
                                                </ul>
                                            </ul>
                                        )}
                                    </div>
                                    <div className=" bg-white">
                                        <div className="flex flex-row mx-10 py-3 font-semibold border-b-[1px] border-black border-opacity-40">
                                            <button className='font-dmsans flex flex-row items-center justify-between w-full' onClick={() => toggleSection('DoorsWindows')}>
                                                <p className=' font-bold'>Doors & Windows</p>
                                                {openSections['DoorsWindows'] ? <FaMinus /> : <FaPlus />}
                                            </button>
                                        </div>
                                        {openSections['DoorsWindows'] && (
                                            <ul className="mx-10 py-3">
                                                <ul>
                                                    {pkg.features.DoorsWindows.map((feature, index) => (
                                                        <li key={index} className="py-1">{feature}</li>
                                                    ))}
                                                </ul>
                                            </ul>
                                        )}
                                    </div>

                                    <div className=" bg-white">
                                        <div className="flex flex-row mx-10 py-3 font-semibold border-b-[1px] border-black border-opacity-40">
                                            <button className='font-dmsans flex flex-row items-center justify-between w-full' onClick={() => toggleSection('Flooring')}>
                                                <p className=' font-bold'>Flooring</p>
                                                {openSections['Flooring'] ? <FaMinus /> : <FaPlus />}
                                            </button>
                                        </div>
                                        {openSections['Flooring'] && (
                                            <ul className="mx-10 py-3">
                                                <ul>
                                                    {pkg.features.Flooring.map((feature, index) => (
                                                        <li key={index} className="py-1">{feature}</li>
                                                    ))}
                                                </ul>
                                            </ul>
                                        )}
                                    </div>
                                    <div className=" bg-white">
                                        <div className="flex flex-row mx-10 py-3 font-semibold border-b-[1px] border-black border-opacity-40">
                                            <button className='font-dmsans flex flex-row items-center justify-between w-full' onClick={() => toggleSection('SanitaryWare')}>
                                                <p className=' font-bold text-start'>Sanitary Ware and Fittings</p>
                                                {openSections['SanitaryWare'] ? <FaMinus /> : <FaPlus />}
                                            </button>
                                        </div>
                                        {openSections['SanitaryWare'] && (
                                            <ul className="mx-10 py-3">
                                                <ul>
                                                    {pkg.features.SanitaryWare.map((feature, index) => (
                                                        <li key={index} className="py-1">{feature}</li>
                                                    ))}
                                                </ul>
                                            </ul>
                                        )}
                                    </div>
                                    <div className=" bg-white">
                                        <div className="flex flex-row mx-10 py-3 font-semibold border-b-[1px] border-black border-opacity-40">
                                            <button className='font-dmsans flex flex-row items-center justify-between w-full' onClick={() => toggleSection('Painting')}>
                                                <p className=' font-bold'>Painting</p>
                                                {openSections['Painting'] ? <FaMinus /> : <FaPlus />}
                                            </button>
                                        </div>
                                        {openSections['Painting'] && (
                                            <ul className="mx-10 py-3">
                                                <ul>
                                                    {pkg.features.Painting.map((feature, index) => (
                                                        <li key={index} className="py-1">{feature}</li>
                                                    ))}
                                                </ul>
                                            </ul>
                                        )}
                                    </div>
                                    <div className=" bg-white">
                                        <div className="flex flex-row mx-10 py-3 font-semibold border-b-[1px] border-black border-opacity-40">
                                            <button className='font-dmsans flex flex-row items-center justify-between w-full' onClick={() => toggleSection('Kitchen')}>
                                                <p className=' font-bold'>Kitchen</p>
                                                {openSections['Kitchen'] ? <FaMinus /> : <FaPlus />}
                                            </button>
                                        </div>
                                        {openSections['Kitchen'] && (
                                            <ul className="mx-10 py-3">
                                                <ul>
                                                    {pkg.features.Kitchen.map((feature, index) => (
                                                        <li key={index} className="py-1">{feature}</li>
                                                    ))}
                                                </ul>
                                            </ul>
                                        )}
                                    </div>
                                    <div className=" bg-white">
                                        <div className="flex flex-row mx-10 py-3 font-semibold border-b-[1px] border-black border-opacity-40">
                                            <button className='font-dmsans flex flex-row items-center justify-between w-full' onClick={() => toggleSection('Miscellaneous')}>
                                                <p className=' font-bold'>Other Miscellaneous</p>
                                                {openSections['Miscellaneous'] ? <FaMinus /> : <FaPlus />}
                                            </button>
                                        </div>
                                        {openSections['Miscellaneous'] && (
                                            <ul className="mx-10 py-3">
                                                <ul>
                                                    {pkg.features.Miscellaneous.map((feature, index) => (
                                                        <li key={index} className="py-1">{feature}</li>
                                                    ))}
                                                </ul>
                                            </ul>
                                        )}
                                    </div>
                                    <div className=" bg-white">
                                        <div className="flex flex-row mx-10 py-3 font-semibold border-b-[1px] border-black border-opacity-40">
                                            <button className='font-dmsans flex flex-row items-center justify-between w-full' onClick={() => toggleSection('Facilities')}>
                                                <p className=' font-bold'>Other Facilities</p>
                                                {openSections['Facilities'] ? <FaMinus /> : <FaPlus />}
                                            </button>
                                        </div>
                                        {openSections['Facilities'] && (
                                            <ul className="mx-10 py-3">
                                                <ul>
                                                    {pkg.features.Facilities.map((feature, index) => (
                                                        <li key={index} className="py-1">{feature}</li>
                                                    ))}
                                                </ul>
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-3 text-black">No packages available for the selected location.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
