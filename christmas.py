import random

# Liste des amis participant à l'échange de cadeaux
friends = ["Alice", "Bob", "Charlie", "Diana"]

# Fonction pour attribuer les cadeaux aléatoirement
def assign_gifts(friends):
    """
    Cette fonction attribue un destinataire à chaque participant.
    Chaque participant donne un cadeau à une personne différente
    et reçoit un cadeau d'une autre personne sans réciprocité directe.
    """
    receivers = friends[:]  # Copie de la liste des amis pour le choix des destinataires
    random.shuffle(receivers)  # Mélange initial pour plus de randomisation
    gift_exchange = {}  # Dictionnaire pour stocker les résultats

    for giver in friends:
        # Exclure les cas où le donneur serait son propre destinataire
        # ou créerait une relation directe réciproque (giver ↔ receiver)
        possible_receivers = [
            r for r in receivers if r != giver and gift_exchange.get(r) != giver
        ]

        # Si aucun destinataire possible, recommencer l'attribution
        if not possible_receivers:
            return assign_gifts(friends)

        # Choisir un destinataire au hasard
        receiver = random.choice(possible_receivers)
        gift_exchange[giver] = receiver
        receivers.remove(receiver)  # Retirer le destinataire attribué

    return gift_exchange

# Lancer l'attribution des cadeaux
gift_exchange = assign_gifts(friends)

# Afficher les résultats de manière élégante
print("🎁 Résultats de l'échange de cadeaux :\n")
for giver, receiver in gift_exchange.items():
    print(f"{giver} offre un cadeau à {receiver} 🎉")
