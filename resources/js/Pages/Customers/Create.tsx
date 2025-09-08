import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head , useForm} from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/Components/ui/label';
import { FormEventHandler , useRef } from 'react';


type CreateCustomerForm = {
    en_name?: string;
    ar_name?: string;
    dial_cod?: string;
    phone?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
    media?: string, 
}

export default function Create() {
    const customerName = useRef<HTMLInputElement>(null);
    
    const { data, setData, errors, post, reset, processing, progress } = useForm<Required<CreateCustomerForm>>({ 
        en_name: '',
        ar_name: '',
        dial_cod: '',
        phone: '',
        email: '',
        password: '',
        password_confirmation: '',
        media: '', 
    }); 

    const createCustomer: FormEventHandler = (e) => {
        e.preventDefault();
 
        post(route('customers.store'), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                if (errors.name) {
                    reset('password'); //////////
                    customerName.current?.focus();
                }
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Customer" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <form onSubmit={createCustomer} className="space-y-6">

                    <div className="grid gap-2">
                        <Label htmlFor="en_name"> English Name *</Label>
 
                        <Input
                            id="en_name"
                            name="en_name"
                            ref={customerName}
                            value={data.en_name}
                            onChange={(e) => setData('en_name', e.target.value)}
                            className="mt-1 block w-full"
                            required
                        />
 
                        <InputError message={errors.en_name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="ar_name">Arabic Name *</Label>
 
                        <Input
                            id="ar_name"
                            name="ar_name"
                            ref={customerName}
                            value={data.ar_name}
                            onChange={(e) => setData('ar_name', e.target.value)}
                            className="mt-1 block w-full"
                            required
                        />
 
                        <InputError message={errors.ar_name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="dial_cod"> Dial cod *</Label>
 
                        <Input
                            id="dial_cod"
                            name="dial_cod"
                            ref={customerName}
                            value={data.dial_cod}
                            onChange={(e) => setData('dial_cod', e.target.value)}
                            className="mt-1 block w-full"
                            required
                        />
 
                        <InputError message={errors.dial_cod} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="phone"> Phone *</Label>
 
                        <Input
                            id="phone"
                            name="phone"
                            ref={customerName}
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            className="mt-1 block w-full"
                            required
                        />
 
                        <InputError message={errors.phone} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email"> Email *</Label>
 
                        <Input
                            id="email"
                            name="email"
                            ref={customerName}
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="mt-1 block w-full"
                            required
                        />
 
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password"> Password *</Label>
 
                        <Input
                            id="password"
                            name="password"
                            ref={customerName}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-full"
                            required
                        />
 
                        <InputError message={errors.password} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation"> Password confirmation *</Label>
 
                        <Input
                            id="password_confirmation"
                            name="password_confirmation"
                            ref={customerName}
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            className="mt-1 block w-full"
                            required
                        />
 
                        <InputError message={errors.password_confirmation} />
                    </div>

                     <div className="grid gap-2">
                        <Label htmlFor="media">Media</Label>
                    
                        <Input
                            id="media"
                            onChange={(e) => setData('media', e.target.files[0])}
                            className="mt-1 block w-full"
                            type="file"
                        />
                    
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                    
                        <InputError message={errors.media} />
                    </div>
 
                    <div className="flex items-center gap-4">
                        <Button disabled={processing}>Create </Button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}