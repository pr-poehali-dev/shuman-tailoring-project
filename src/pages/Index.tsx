import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-accent/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
            Shuman Tailor
          </h1>
          <div className="hidden md:flex gap-6">
            {['Главная', 'Услуги', 'Портфолио', 'Центр тканей', 'Отзывы', 'Контакты'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-primary-foreground/90 hover:text-accent transition-colors text-sm uppercase tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="главная"
        className="pt-24 pb-16 px-4 bg-gradient-to-b from-primary to-primary/90"
      >
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Создаем стиль, который останется с вами
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            В мире, где все спешат, мы в "Shuman Tailor" верим в ценность вещей, созданных с душой и без компромиссов.
            Наша история началась не с открытия ателье, а с любви к идеальному стежку.
          </p>
          <Button
            size="lg"
            className="bg-accent text-primary hover:bg-accent/90 text-lg px-8"
            onClick={() => document.getElementById('контакты')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы создаем не моду на один сезон, а стиль, который станет частью вашей истории
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Shirt',
                title: 'Деловые костюмы',
                desc: 'Безупречный крой для уверенности в каждой детали',
              },
              {
                icon: 'Sparkles',
                title: 'Вечерние платья',
                desc: 'Элегантность, которая подчеркивает вашу индивидуальность',
              },
              {
                icon: 'Home',
                title: 'Домашний текстиль',
                desc: 'Уют и комфорт в каждой строчке',
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-accent/20"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name={service.icon} size={32} className="text-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-12">
            Каждое изделие — история мастерства и внимания к деталям
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: 'https://cdn.poehali.dev/projects/0e3134ac-184a-4a08-b122-bdeafa7bcfdf/files/1e94fc18-7519-49e1-8781-f556d540b917.jpg',
                title: 'Классический костюм',
                desc: 'Пошив по индивидуальным меркам',
              },
              {
                img: 'https://cdn.poehali.dev/projects/0e3134ac-184a-4a08-b122-bdeafa7bcfdf/files/bad942df-596a-41e6-bfcf-c5d62993db12.jpg',
                title: 'Вечернее платье',
                desc: 'Элегантный силуэт из премиум-ткани',
              },
              {
                img: 'https://cdn.poehali.dev/projects/0e3134ac-184a-4a08-b122-bdeafa7bcfdf/files/0cdf8eb2-c732-49f6-b3f5-87a2f57f0de7.jpg',
                title: 'Коллекция тканей',
                desc: 'Более 500 видов эксклюзивных материалов',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg shadow-lg animate-fade-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/90">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="центр-тканей" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Собственный центр тканей</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Более 500 эксклюзивных образцов тканей из Италии, Англии и Франции. От классической
            шерсти до роскошного шелка — каждый материал тщательно отобран нашими специалистами.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: 'CheckCircle', text: 'Итальянский шелк' },
              { icon: 'CheckCircle', text: 'Английская шерсть' },
              { icon: 'CheckCircle', text: 'Французский лен' },
              { icon: 'CheckCircle', text: 'Премиум хлопок' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 animate-scale-in">
                <Icon name={item.icon} size={32} className="text-accent" />
                <p className="text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Анна Петрова',
                text: 'Невероятная работа! Платье сидит идеально, каждый шов выполнен безупречно. Спасибо за профессионализм!',
                rating: 5,
              },
              {
                name: 'Дмитрий Соколов',
                text: 'Заказал три костюма для работы. Качество тканей и пошива на высшем уровне. Рекомендую всем!',
                rating: 5,
              },
            ].map((review, idx) => (
              <Card key={idx} className="animate-fade-in border-accent/20">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-8">
            Запишитесь на консультацию, и мы подберем идеальное решение для вас
          </p>
          <Card className="border-accent/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-primary">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Icon name="MapPin" size={20} className="text-accent" />
              <p>г. Москва, ул. Тверская, 15</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Icon name="Phone" size={20} className="text-accent" />
              <p>+7 (495) 123-45-67</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Icon name="Clock" size={20} className="text-accent" />
              <p>Пн-Сб: 10:00 - 20:00, Вс: выходной</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary py-8 px-4">
        <div className="container mx-auto text-center text-primary-foreground/80">
          <p>&copy; 2024 Shuman Tailor. Все права защищены.</p>
          <p className="mt-2 text-sm">Создаем стиль с душой и мастерством</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
