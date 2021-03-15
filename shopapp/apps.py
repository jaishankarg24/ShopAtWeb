from django.apps import AppConfig


class ShopappConfig(AppConfig):
    name = 'shopapp'

    def ready(self):
        import shopapp.signals
