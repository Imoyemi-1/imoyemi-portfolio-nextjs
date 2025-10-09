import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import servicesInfo from '@/lib/services.json';
import { FiCheckCircle } from 'react-icons/fi';

const Services = () => {
  return (
    <section className='py-16 px-4 flex flex-col gap-12'>
      <header className='flex flex-col items-center gap-4'>
        <Badge className='bg-white shadow-[0_1px_2px_#090d030d] rounded-full border border-[rgb(224,224,230)] text-black text-sm'>
          What I Offer
        </Badge>
        <h2 className='text-center text-[rgb(20,17,16)] text-3xl font-semibold'>
          Modern, performance-driven websites crafted around your brand vision.
        </h2>
      </header>
      <div className='flex flex-col gap-4'>
        {servicesInfo.map((ser) => (
          <Card key={ser.id}>
            <CardHeader className='text-lg'>
              <CardTitle>{ser.title}</CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
              {ser.category.map((cat, index) => (
                <p
                  key={index}
                  className='flex items-center gap-2 text-[rgb(69,69,79)] '
                >
                  <FiCheckCircle className='w-4 h-4 ' />
                  {cat}
                </p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
