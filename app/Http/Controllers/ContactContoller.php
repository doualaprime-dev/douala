<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ContactContoller extends Controller
{
    public function index(Request $request): Response
    {
        $perPage = $request->input('perPage', 10);
        $search = $request->input('search', '');
        $sort = $request->input('sort', 'id');
        $direction = $request->input('direction', 'asc');

        $contacts = Contact::select('id', 'name')
            ->when($search, function ($query, $search) {
                $query->where('name', 'like', '%' . $search . '%');
            })
            ->orderBy($sort, $direction)
            ->paginate($perPage)->withQueryString();

        return Inertia::render('Admin/Contacts/Index', [
            'contacts' => $contacts,
            'filters' => [
                'search' => $search,
                'sort' => $sort,
                'direction' => $direction,
                'perPage' => $perPage,
                'page' => $request->input('page', 1),
            ],
            'can' => [
                'create' => true,
                'edit' => true,
                'delete' => true
            ]
        ]);
    }

    public function create(): Response
    {
        if (!Auth::check()) {
            abort(403);
        }

        return Inertia::render("Contacts/Create");
    }

    public function store(Request $request)
    {
        if (!Auth::check()) {
            abort(403);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        $contact = new Contact();
        $contact->name = $validated['name'];
        $contact->email = $validated['email'];
        $contact->message = $validated['message'];

        $contact->save();

        return redirect()->route("home")->with('success','Message envoyé avec succès');
    }

    public function edit(Contact $contact): Response
    {
        return Inertia::render('Admin/Contacts/Edit', [
            'contact'=> $contact,
        ]);
    }

    public function show(Contact $contact)
    {
        return Inertia::render('Admin/Contacts/Show', [
            'contact'=> $contact,
        ]);
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();

        return redirect()->back()->with('success','Contact supprimé avec succès');
    }
}
