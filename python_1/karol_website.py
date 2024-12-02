import sys

# Simple database for chemical elements (20)
periodic_table = {
    "H": {"name": "Hydrogen", "atomic_number": 1, "atomic_mass": 1.008},
    "He": {"name": "Helium", "atomic_number": 2, "atomic_mass": 4.00},
    "Li": {"name": "Lithium", "atomic_number": 3, "atomic_mass": 6.95},
    "Be": {"name": "Beryllium", "atomic_number": 4, "atom_mass": 9.0122},
    "B": {"name": "boron", "atomic_number": 5, "atomic_mass": 10.81},
    "C": {"name": "Carbon", "atomic_number": 6, "atomic_mass": 12.01},
    "N": {"name": "Nitrogen", "atomic_number": 7, "atomic_mass": 14.01},
    "O": {"name": "Oxygen", "atomic_number": 8, "atomic_mass": 16.00},
    "F": {"name": "Fluorine", "atomic_number": 9, "atomic_mass": 18.998},
    "Ne": {"name": "Neon", "atomic_number": 10, "atomic_mass": 20.180},
    "Na": {"name": "Sodium", "atomic_number": 11, "atomic_mass": 22.99},
    "Mg": {"name": "Magnesium", "atomic_number": 12, "atomic_mass": 24.305},
    "Al": {"name": "Aluminium", "atomic_number": 13, "atomic_mass": 26.982},
    "Si": {"name": "Silicon", "atomic_number": 14, "atomic_mass": 28.085},
    "P": {"name": "Phosphorus", "atomic_number": 15, "atomic_mass": 30.974},
    "S": {"name": "Sulfor", "atomic_number": 16, "atom_mass": 32.06},
    "Cl": {"name": "Chlorine", "atomic_number": 17, "atomic_mass": 35.45},
    "Ar": {"name": "Argon", "atomic_number": 18, "atomic_mass": 39.948},
    "K": {"name": "Potassium", "atomic_number": 19, "atomic_mass": 39.098},
    "Ca": {"name": "Calcium", "atomic_number": 20, "atomic_mass": 40.078},

}